import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaRentInput } from './dto/create-media-rent.input';
import { UpdateMediaRentInput } from './dto/update-media-rent.input';
import { MediaRent } from './entities/media-rent.entity';

@Injectable()
export class MediaRentService {
  constructor(
    @InjectRepository(MediaRent)
    private mediaRentRepository: Repository<MediaRent>,
  ) {}
  async create(id: number, createMediaRentInput: CreateMediaRentInput) {
    const rent = this.mediaRentRepository.create(createMediaRentInput);
    rent.profile_id = id;
    return this.mediaRentRepository.save(rent);
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
