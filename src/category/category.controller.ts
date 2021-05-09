import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';
import { Controller, Post, Get, Param, Body, ParseIntPipe, Delete } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    @Get('')
    async getCategories() {
        return await this.categoryService.getCategories();
    }

    @Post('')
    async createCategory(@Body()categoryDto: CategoryDto) {
        return await this.categoryService.createCategory(categoryDto);
    }
    
    @Get('/:id')
    async getCategory(@Param('id', ParseIntPipe) id: number) {
        return await this.categoryService.getCategory(id);
    }

    @Delete('/:id')
    async deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return  await this.categoryService.deleteCategory(id);
    }
}
