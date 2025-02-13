import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
export declare class ESignService {
    private httpService;
    private configService;
    private apiToken;
    private apiUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    createTemplate(pdfPath: string, signers: any[]): Promise<any>;
    getWebhookData(): Promise<any>;
}
