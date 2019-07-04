import { Controller, Get, Post, Delete, Res, HttpCode, Header, Param, Body, Query, Put, HttpStatus } from '@nestjs/common';
import { get } from 'http';
import { create } from 'domain';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { Response } from 'express';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';



@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}


// // différents usages
// @Controller('cats')
// export class CatsController {

//     // // renvoi simple sans async
//     // @Get()
//     // findAll(): string {
//     //     return 'This action returns all cats';
//     // }

//     // // renvoi avec async
//     // @Get()
//     // async findAll(): Promise<any[]> {  // la promesse renvoi un tableau
//     //     return [];
//     // }

//     @Get()
//     findAll(): Observable<any[]> {
//         return of([]);
//     }

//     // // utilisation d'un observable

//     // // permet de d'utiliser plusieurs type de paramètres
//     // @Get(':id')
//     // findOne(@Param() params): string {
//     //     return `This action return a #${params.id} cat`;
//     // }

//     @Get(':id')
//     findOne(@Param('id') id): string {
//         return `This action return a #${id} cat`;
//     }

//     /*    @Get('ab*cd')
//         findAll() {
//           return 'This route uses a wildcard';
//         }
//     */

//     @Post()
//     // @HttpCode(204)
//     // @Header('Cache-Control', 'none')
//     async create(@Body() createCatDto: CreateCatDto) {
//         return 'This action adds a new cat';
//     }
// }


//différent type de endpoint
// @Controller('cats')
// export class CatsController {
//     @Post()
//     create(@Body() CreateCatDto: CreateCatDto) {
//         return 'This action adds a new cat';
//     }


//     @Get()
//     findAll(@Query() query: ListAllEntities) {
//         return `This action returns all cats (limit: ${query.limit} items)`;
//     }

//     @Get(':id')
//     findOne(@Param('id') id: string) {
//         return `This action returns a #${id} cat`;
//     }

//     @Put(':id')
//     update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//         return `This action updates a #${id} cat`;
//     }

//     @Delete(':id')
//     remove(@Param('id') id: string) {
//         return `This action removes a #${id} cat`;
//     }
// }


// @Controller('cats')
// export class CatsController {

//     @Post()
//     create(@Res() res: Response) {
//         res.status(HttpStatus.CREATED).send();
//     }

//     @Get()
//     findAll(@Res() res: Response) {
//         res.status(HttpStatus.OK).json([]);
//     }
// }


