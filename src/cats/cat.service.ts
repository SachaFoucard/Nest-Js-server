import { Model, Schema } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../Types/create-cats.dto';
import { CatSchema } from '../schemas/cat.Schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Schema.name) private catModel: Model<Cat>) {}

  async create(createCatDto: Cat): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
