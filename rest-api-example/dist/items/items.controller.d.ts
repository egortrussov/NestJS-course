import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemsController {
    findAll(req: Request, res: Response): Response;
    findOne(param: any): string;
    create(createItemDto: CreateItemDto): string;
    delete(param: any): string;
    update(param: any, updateItemDto: CreateItemDto): string;
}
