export declare const pdfFileFilter: (req: any, file: Express.Multer.File, callback: Function) => any;
export declare const pdfStorage: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: Express.Multer.File, callback: Function) => any;
    limits: {
        fileSize: number;
    };
};
export declare const multerOptions: {
    fileFilter: (req: any, file: Express.Multer.File, callback: Function) => any;
    storage: import("multer").StorageEngine;
    limits: {
        fileSize: number;
    };
};
