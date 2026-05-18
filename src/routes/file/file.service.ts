import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Express } from 'express';
import { mkdir, writeFile } from 'node:fs/promises';
import { v6 as uuid } from 'uuid';

import { PrismaService } from '@/features/prisma/prisma.service';

@Injectable()
export class FileService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadSingleFile(
    userId: string,
    file: Express.Multer.File,
    options?: {
      isPrivate?: boolean;
    },
  ): Promise<{ id: string }> {
    const { originalname: name, mimetype: mimeType, buffer } = file;
    const fileId = uuid();
    const isPrivate: boolean = !!options?.isPrivate;

    // Try creating file
    try {
      await mkdir(`./uploads/${fileId}`, { recursive: true });
      await writeFile(`./uploads/${fileId}/${name}`, buffer);
    } catch {
      throw new UnprocessableEntityException('Failed to upload file');
    }

    // Creating record inside database only if file has
    // been successfully created
    return this.prisma.upload.create({
      data: {
        id: fileId,
        isPrivate,
        filenameWithExtension: name,
        mimeType: mimeType,
        ownerId: userId,
      },
      select: {
        id: true,
      },
    });
  }
}
