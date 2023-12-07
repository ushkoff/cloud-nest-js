import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<import("./cat.schema").Cat>;
    findAll(): Promise<import("./cat.schema").Cat[]>;
    findOne(id: string): Promise<import("./cat.schema").Cat>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<import("./cat.schema").Cat>;
    remove(id: string): Promise<any>;
}
