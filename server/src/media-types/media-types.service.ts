import { Injectable } from '@nestjs/common';
import { CreateMediaTypeInput } from './dto/create-media-type.input';
import { UpdateMediaTypeInput } from './dto/update-media-type.input';

@Injectable()
export class MediaTypesService {
  create(createMediaTypeInput: CreateMediaTypeInput) {
    return 'This action adds a new mediaType';
  }

  findAll() {
    return `This action returns all mediaTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaType`;
  }

  update(id: number, updateMediaTypeInput: UpdateMediaTypeInput) {
    return `This action updates a #${id} mediaType`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaType`;
  }
}
