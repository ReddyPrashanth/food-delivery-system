import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class MenuItemDto {
    @Length(3, 255)
    name: string;

    @IsString()
    description: string;

    @IsOptional()
    ingredients: string;

    @IsOptional()
    recipe: string;

    @IsNumber()
    price: number;

    @IsBoolean()
    active: boolean;

    @IsInt()
    categoryId: number;
}