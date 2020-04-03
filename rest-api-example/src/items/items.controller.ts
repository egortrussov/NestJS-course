import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express'

import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {

    }
 
    @Get()
    async findAll(): Promise <Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param() param): Promise <Item> {
        return this.itemsService.findOne(param.id)
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
