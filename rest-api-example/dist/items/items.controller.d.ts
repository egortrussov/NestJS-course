import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    findOne(param: any): Promise<Item>;
    create(createItemDto: CreateItemDto): string;
    delete(param: any): string;
    update(param: any, updateItemDto: CreateItemDto): string;
}
