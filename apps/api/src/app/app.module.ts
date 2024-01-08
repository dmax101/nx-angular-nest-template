import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { CoreModule } from './core/core.module';
import { PrismaService } from './core/prisma/prisma.service';

@Module({
  imports: [AuthModule, UsersModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
