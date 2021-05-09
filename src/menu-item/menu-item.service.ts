import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuItemDto } from './dto/menu-item.dto';
import { MenuItem } from './entities/menu-item.entity';
import { MenuItemNotFoundException } from './exceptions/menu-item-not-found.exception';

@Injectable()
export class MenuItemService {

    constructor(
        @InjectRepository(MenuItem)
        private readonly menuItemRepository: Repository<MenuItem>
    ) {}

    async createMenuItem(menuItemDto: MenuItemDto) {
        const menuItem = this.menuItemRepository.create(menuItemDto);
        try{
            return await menuItem.save();
        }catch(error) {
            throw new HttpException('Unable to create menu item.', 500);
        }
    }

    async getMenuItem(id: number) {
        const menuItem = await this.menuItemRepository.findOne(id);
        if(menuItem){
            return menuItem;
        }

        throw new MenuItemNotFoundException(id);
    }

    async deleteMenuItem(id: number) {
        const result = await this.menuItemRepository.delete({id});
        if(result.affected === 0){
            throw new MenuItemNotFoundException(id);
        }
        return { id };
    }
}
