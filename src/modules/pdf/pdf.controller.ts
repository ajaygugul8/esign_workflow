import { Controller, Post, UploadedFile, UseInterceptors, Get, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PdfService } from './pdf.service';
import { pdfStorage } from '../../utils/file-upload';
import { Response } from 'express';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', pdfStorage))
  async uploadPdf(@UploadedFile() file: Express.Multer.File) {
    return { message: 'File uploaded successfully', fileName: file.filename };
  }

  @Get(':fileName')
  async getPdf(@Param('fileName') fileName: string, @Res() res: Response) {
    const file = await this.pdfService.getPdf(fileName);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(file);
  }
}
