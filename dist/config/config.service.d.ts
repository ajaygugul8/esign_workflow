import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
export declare class ESignService {
    private readonly configService;
    private readonly httpService;
    private apiToken;
    private apiUrl;
    constructor(configService: ConfigService, httpService: HttpService);
}
