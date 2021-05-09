import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MenuItem } from '../../menu-item/entities/menu-item.entity';

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 50})
    name: string;

    @OneToMany(() => MenuItem, item => item.category)
    items: MenuItem[];
}