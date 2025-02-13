import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  private uploadPath = './uploads';

  async savePdf(file: Express.Multer.File): Promise<string> {
    return path.join(this.uploadPath, file.filename);
  }

  async getPdf(fileName: string): Promise<Buffer> {
    return fs.promises.readFile(path.join(this.uploadPath, fileName));
  }
}
