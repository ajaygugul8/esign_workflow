export declare class PdfService {
    private uploadPath;
    savePdf(file: Express.Multer.File): Promise<string>;
    getPdf(fileName: string): Promise<Buffer>;
}
