import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('cat')
export class CatController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(':id')
  findId(@Param() params, @Res() res: Response) {
    res.status(HttpStatus.OK).send(`Hello World ${params.id}`);
  }

  @Get('docs')
  @HttpCode(203)
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
