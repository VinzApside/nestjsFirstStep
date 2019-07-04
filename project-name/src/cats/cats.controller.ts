import { Controller, Get, Post, HttpCode, Header, Param } from '@nestjs/common';
import { get } from 'http';
import { create } from 'domain';

@Controller('cats')
export class CatsController {

    // // renvoi simple sans async
    // @Get()
    // findAll(): string {
    //     return 'This action returns all cats';
    // }

    // // renvoi avec async
    @Get()
    async findAll(): Promise<any[]> {  // la promesse renvoi un tableau
        return [];
    }

    // // permet de d'utiliser plusieurs type de paramètres
    // @Get(':id')
    // findOne(@Param() params): string {
    //     return `This action return a #${params.id} cat`;
    // }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `This action return a #${id} cat`;
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
