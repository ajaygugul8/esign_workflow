import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ESignService {
  private apiToken: string;
  private apiUrl: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {
    this.apiToken = this.configService.get<string>('OPENSIGN_API_TOKEN') || '';
    this.apiUrl = this.configService.get<string>('OPENSIGN_API_URL') || '';
  }

  async createTemplate(pdfPath: string, signers: any[]): Promise<any> {
    if (!this.apiToken) {
      throw new Error('API Token is missing. Please check your .env file.');
    }
    try {
      const response = await lastValueFrom(
        this.httpService.post(`${this.apiUrl}/createtemplate`, {
          document: pdfPath,
          signers: signers,
        }, {
          headers: { Authorization: `Bearer ${this.apiToken}` },
        })
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Error creating template');
    }
  }

  /** ✅ FIX: Add the missing `getWebhookData()` method */
  async getWebhookData(): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`${this.apiUrl}/get-webhook`, {
          headers: { Authorization: `Bearer ${this.apiToken}` },
        })
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching webhook data',
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
