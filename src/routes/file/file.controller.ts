import {
  Controller,
  HttpStatus,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

import { Endpoint } from '@/decorators/endpoint';
import { CurrentUser } from '@/routes/auth/decorators/user.decorator';

import { FileSizeValidationPipe } from './file.pipe';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Endpoint('POST', '/upload', {
    code: HttpStatus.CREATED,
    authRequired: true,
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @CurrentUser('id') userId: string,
    @UploadedFile(new FileSizeValidationPipe()) file: Express.Multer.File,
    @Query('private') privateKey: string | undefined,
  ): Promise<{ id: string }> {
    const isPrivate: boolean = privateKey === 'true';
    return this.fileService.uploadSingleFile(userId, file, {
      isPrivate,
    });
  }
}
