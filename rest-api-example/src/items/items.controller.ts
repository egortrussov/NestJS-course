import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express'

import { CreateItemDto } from './dto/create-item.dto'

@Controller('items')
export class ItemsController {
    @Get()
    findAll(@Req() req: Request, @Res() res: Response): Response {
        console.log(req.url);
        return res.send('Hello!');
    }

    @Get(':id')
    findOne(@Param() param): string {
        return `Item ${ param.id }`;
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `name: ${ createItemDto.name }`;
    }    

    @Delete(':id')
    delete(@Param() param): string {
        return `Deleted item ${ param.id }`
    }

    @Put(':id')
    update(@Param() param, @Body() updateItemDto: CreateItemDto): string {
        return `Put item with id ${ param.id } and name of ${ updateItemDto.name }`
    }
}
