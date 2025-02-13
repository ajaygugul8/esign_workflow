"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESignService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let ESignService = class ESignService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.apiToken = this.configService.get('OPENSIGN_API_TOKEN') || '';
        this.apiUrl = this.configService.get('OPENSIGN_API_URL') || '';
    }
    async createTemplate(pdfPath, signers) {
        if (!this.apiToken) {
            throw new Error('API Token is missing. Please check your .env file.');
        }
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.post(`${this.apiUrl}/createtemplate`, {
                document: pdfPath,
                signers: signers,
            }, {
                headers: { Authorization: `Bearer ${this.apiToken}` },
            }));
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data || 'Error creating template');
        }
    }
    async getWebhookData() {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`${this.apiUrl}/get-webhook`, {
                headers: { Authorization: `Bearer ${this.apiToken}` },
            }));
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException(error.response?.data || 'Error fetching webhook data', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ESignService = ESignService;
exports.ESignService = ESignService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], ESignService);
//# sourceMappingURL=esign.service.js.map