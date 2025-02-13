import { Controller, Post, Get, Body } from '@nestjs/common';
import { ESignService } from './esign.service';

@Controller('esign')
export class ESignController {
  constructor(private readonly eSignService: ESignService) {}

  @Post('create')
  async createEtemplate(@Body() body) {
    const { pdfPath, signers } = body;
    return this.eSignService.createTemplate(pdfPath, signers);
  }

  /** ✅ FIX: Ensure the method exists in the service */
  @Get('webhook')
  async getWebhook() {
    return this.eSignService.getWebhookData();
  }
}
