import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ESignService {
  private apiToken: string;
  private apiUrl: string;

  constructor(
    private readonly configService: ConfigService, // ✅ Ensure this is injected
    private readonly httpService: HttpService
  ) {
    this.apiToken = this.configService.get<string>('OPENSIGN_API_TOKEN') || '';
    this.apiUrl = this.configService.get<string>('OPENSIGN_API_URL') || '';
  }
}
