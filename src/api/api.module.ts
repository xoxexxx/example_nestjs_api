import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Api} from './api.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Api])],
  exports: [ApiService],
  providers: [ApiService],
  controllers: [ApiController]
})
export class ApiModule {}
