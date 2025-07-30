import { generateUUID } from "../utils/generateUUID";

export abstract class BaseEntity {
    readonly id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.id = generateUUID();
        const now = new Date();
        this.createdAt = now;
        this.updatedAt = now;

    }


    touch() {
        this.updatedAt = new Date();
    }
}