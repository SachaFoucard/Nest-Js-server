
import { Controller, Get, Query, Post, Body, Res, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { Cat } from '../Types/create-cats.dto';
import { Response } from 'express';
import { CatsService } from './cat.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    create(@Body() createCatDto: Cat) {
        return this.catsService.create(createCatDto);
    }
  

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
    @Get()
    async findAll() {
      try {
        await this.catsService.findAll()
      } catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN, {
          cause: error
        });
      }
    }
    
}