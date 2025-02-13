import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ✅ This makes ConfigService available globally
    }),
  ],
  exports: [ConfigModule], // ✅ Export it so other modules can use it
})
export class ConfigurationModule {}
