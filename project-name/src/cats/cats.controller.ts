import { Controller, Get, Post, HttpCode, Header, Param, Body } from '@nestjs/common';
import { get } from 'http';
import { create } from 'domain';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {

    // // renvoi simple sans async
    // @Get()
    // findAll(): string {
    //     return 'This action returns all cats';
    // }

    // // renvoi avec async
    // @Get()
    // async findAll(): Promise<any[]> {  // la promesse renvoi un tableau
    //     return [];
    // }

    @Get()
    findAll(): Observable<any[]> {
        return of([]);
    }

    // // utilisation d'un observable

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
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }
}
