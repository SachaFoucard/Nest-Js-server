import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller'
import { CatsService } from './cat.service'
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from 'src/schemas/cat.Schema';
import { Schema } from 'mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]

})

export class CatsModule { }

