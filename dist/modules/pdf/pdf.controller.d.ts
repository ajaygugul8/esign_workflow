import { PdfService } from './pdf.service';
import { Response } from 'express';
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    uploadPdf(file: Express.Multer.File): Promise<{
        message: string;
        fileName: string;
    }>;
    getPdf(fileName: string, res: Response): Promise<void>;
}
