import { Module } from '@nestjs/common';
import { ESignService } from './esign.service';
import { ESignController } from './esign.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule], 
  controllers: [ESignController],
  providers: [ESignService],
  exports: [ESignService], // Ensure it is exported
})
export class ESignModule {}
