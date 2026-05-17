import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

export class FileSize {
  static kb(count: number): number {
    return 1000 * count;
  }

  static mb(count: number): number {
    return FileSize.kb(1000) * count;
  }
}

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  private readonly maxSize: number;

  constructor(maxSize: number = FileSize.mb(10)) {
    this.maxSize = maxSize;
  }

  transform(value: any): boolean {
    const size: number | undefined = value?.size;
    if (size === undefined)
      throw new BadRequestException('File has not been uploaded');

    if (size > this.maxSize) throw new BadRequestException('File is too large');

    // "value" is an object containing the file's attributes and metadata
    return value;
  }
}
