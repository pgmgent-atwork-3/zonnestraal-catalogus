import { Injectable } from '@nestjs/common';
import { CreateMediaRentInput } from './dto/create-media-rent.input';
import { UpdateMediaRentInput } from './dto/update-media-rent.input';

@Injectable()
export class MediaRentService {
  create(createMediaRentInput: CreateMediaRentInput) {
    return 'This action adds a new mediaRent';
  }

  findAll() {
    return `This action returns all mediaRent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaRent`;
  }

  update(id: number, updateMediaRentInput: UpdateMediaRentInput) {
    return `This action updates a #${id} mediaRent`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaRent`;
  }
}
