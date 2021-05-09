import { Controller, Get, Param, Post, ParseIntPipe, Delete, Body } from '@nestjs/common';
import { MenuItemDto } from './dto/menu-item.dto';
import { MenuItemService } from './menu-item.service';

@Controller('menu-item')
export class MenuItemController {

    constructor(
        private readonly menuItemService: MenuItemService
    ) {}

    @Post('')
    async createMenuItem(@Body() menuItemDto: MenuItemDto) {
        return await this.menuItemService.createMenuItem(menuItemDto);
    }
    
    @Get('/:id')
    async getMenuItem(@Param('id', ParseIntPipe) id: number) {
        return await this.menuItemService.getMenuItem(id);
    }

    @Delete('/:id')
    async deleteMenuItem(@Param('id', ParseIntPipe) id: number) {
        return await this.menuItemService.deleteMenuItem(id);
    }
}

 