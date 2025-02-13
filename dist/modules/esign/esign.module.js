"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESignModule = void 0;
const common_1 = require("@nestjs/common");
const esign_service_1 = require("./esign.service");
const esign_controller_1 = require("./esign.controller");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
let ESignModule = class ESignModule {
};
exports.ESignModule = ESignModule;
exports.ESignModule = ESignModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, config_1.ConfigModule],
        controllers: [esign_controller_1.ESignController],
        providers: [esign_service_1.ESignService],
        exports: [esign_service_1.ESignService],
    })
], ESignModule);
//# sourceMappingURL=esign.module.js.map