import { NotFoundException } from "@nestjs/common";

export class MenuItemNotFoundException extends NotFoundException {
    constructor(id: number) {
        super(`Menu item with id ${id} not found.`);
    }
}