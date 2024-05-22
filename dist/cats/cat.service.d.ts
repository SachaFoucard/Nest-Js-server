import { Cat } from '../Types/create-cats.dto';
export declare class CatsService {
    static create(): void;
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
}
