import { Controller, Get, Post, HttpCode, Header } from '@nestjs/common';
import { get } from 'http';
import { create } from 'domain';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    /*    @Get('ab*cd')
        findAll() {
          return 'This route uses a wildcard';
        }
    */

    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }
}
