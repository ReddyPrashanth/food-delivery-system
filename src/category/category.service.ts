import { CategoryNotFoundException } from './exceptions/category-not-found.exception';
import { CategoryDto } from './dto/category.dto';
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { PostgresErrorCode } from 'src/database/postgres-error-code.enum';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    async createCategory(categoryDto: CategoryDto): Promise<Category> {
        const category = this.categoryRepository.create(categoryDto);
        try{
            await category.save();
            return category;
        }catch(error) {
            console.log(error);
            if(error?.code === PostgresErrorCode.UniqueViolation){
                throw new BadRequestException('Category name is taken.');
            }
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async getCategory(id: number): Promise<Category> {
        const category = await this.categoryRepository.findOne(id);
        if(category){
            return category;
        }
        throw new CategoryNotFoundException(id);
    }
}
