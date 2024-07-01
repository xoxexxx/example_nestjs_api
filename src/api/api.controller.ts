import { Body, Controller, Get, Post, Put, UseGuards, Param, Res, UseInterceptors, UploadedFiles } from '@nestjs/common';
// import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiService } from './api.service';
import { DTO } from "./api.interface";
import { Api } from "./api.entity";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import * as archiver from 'archiver';
// import { Response } from 'express';

@Controller('/api/admin/info')
export class ApiController {

    constructor(private readonly apiService: ApiService) { }

    @Post()
    create(@Body() dto: DTO): Promise<Api> {
        return this.apiService.create(dto)
    }
    @Put(":files")
    update(@Param('files') FILES: string[], @Body() dto: DTO) {
        return `This action updates a #${FILES}`;
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    findMany() {
        return this.apiService.findMany();
    }


}
