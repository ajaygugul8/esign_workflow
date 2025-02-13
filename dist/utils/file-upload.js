"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = exports.pdfStorage = exports.pdfFileFilter = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const pdfFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(pdf)$/)) {
        return callback(new common_1.HttpException('Only PDF files are allowed!', common_1.HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true);
};
exports.pdfFileFilter = pdfFileFilter;
exports.pdfStorage = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const originalName = file.originalname.replace(/[^a-zA-Z0-9]/g, '-');
            const filename = `${originalName}-${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`;
            callback(null, filename);
        },
    }),
    fileFilter: exports.pdfFileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
};
exports.multerOptions = {
    ...exports.pdfStorage,
    fileFilter: exports.pdfFileFilter,
};
//# sourceMappingURL=file-upload.js.map