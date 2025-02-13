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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESignController = void 0;
const common_1 = require("@nestjs/common");
const esign_service_1 = require("./esign.service");
let ESignController = class ESignController {
    constructor(eSignService) {
        this.eSignService = eSignService;
    }
    async createEtemplate(body) {
        const { pdfPath, signers } = body;
        return this.eSignService.createTemplate(pdfPath, signers);
    }
    async getWebhook() {
        return this.eSignService.getWebhookData();
    }
};
exports.ESignController = ESignController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ESignController.prototype, "createEtemplate", null);
__decorate([
    (0, common_1.Get)('webhook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ESignController.prototype, "getWebhook", null);
exports.ESignController = ESignController = __decorate([
    (0, common_1.Controller)('esign'),
    __metadata("design:paramtypes", [esign_service_1.ESignService])
], ESignController);
//# sourceMappingURL=esign.controller.js.map