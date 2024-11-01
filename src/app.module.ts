import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaModule } from './prisma.module';
@Module({
  imports: [UsersModule,PrismaModule],
  controllers: [AppController,UsersController],
  providers: [AppService,PrismaService,UsersService],
})
export class AppModule {}
