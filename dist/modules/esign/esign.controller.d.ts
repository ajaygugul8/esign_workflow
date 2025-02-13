import { ESignService } from './esign.service';
export declare class ESignController {
    private readonly eSignService;
    constructor(eSignService: ESignService);
    createEtemplate(body: any): Promise<any>;
    getWebhook(): Promise<any>;
}
