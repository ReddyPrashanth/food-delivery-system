import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from '../../category/entities/category.entity';

@Entity()
export class MenuItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'text', nullable: true})
    description: string;

    @Column({type: 'text', nullable: true})
    ingredients: string;

    @Column({type: 'text', nullable: true})
    recipe: string;

    @Column({type: 'numeric', precision: 12, scale: 2})
    price: number;
    
    @Column({type: 'boolean', default: true})
    active: boolean;

    @Column()
    categoryId: number;

    @ManyToOne(() => Category, category => category.items)
    category: Category;
}