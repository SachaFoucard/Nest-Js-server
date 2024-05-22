import { Cat } from '../Types/create-cats.dto';
import { CatsService } from './cat.service';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(createCatDto: Cat): void;
    findAll(): Promise<Cat[]>;
    remove(id: string): string;
    find(id: string): Promise<string>;
}
