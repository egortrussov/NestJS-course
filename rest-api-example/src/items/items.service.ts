import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '111222',
            name: 'Eggs',
            desctiption: 'very cool product',
            qty: 120
        },
        {
            id: '33322',
            name: 'Milk',
            desctiption: 'very bad product',
            qty: 120
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id): Item {
        return this.items.find(item => item.id === id);
    }
}
