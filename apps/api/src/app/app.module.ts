import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [SharedModule],
})
export class AppModule {}
