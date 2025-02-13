import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ESignModule } from './modules/esign/esign.module';
import { PdfModule } from './modules/pdf/pdf.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ Ensure ConfigModule is initialized
    ESignModule,
    PdfModule,
  ],
})
export class AppModule {}
