// src/utils/file-upload.ts
import { diskStorage } from 'multer';
import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

// File type validation
export const pdfFileFilter = (req: any, file: Express.Multer.File, callback: Function) => {
  if (!file.originalname.match(/\.(pdf)$/)) {
    return callback(
      new HttpException('Only PDF files are allowed!', HttpStatus.BAD_REQUEST),
      false
    );
  }
  callback(null, true);
};

// Enhanced PDF storage configuration
export const pdfStorage = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req: Express.Request, file: Express.Multer.File, callback: Function) => {
      // Create a safe filename
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const originalName = file.originalname.replace(/[^a-zA-Z0-9]/g, '-');
      const filename = `${originalName}-${uniqueSuffix}${extname(file.originalname)}`;
      
      callback(null, filename);
    },
  }),
  fileFilter: pdfFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
};

// Export multer options for easy use in controllers
export const multerOptions = {
  ...pdfStorage,
  fileFilter: pdfFileFilter,
};