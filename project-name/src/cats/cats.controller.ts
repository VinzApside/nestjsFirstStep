import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

}
