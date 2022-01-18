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

  findAll(id: number) {
    return this.mediaRentRepository.find({
      where: { profile_id: id },
    });
  }

  findAllForAdmin(): Promise<MediaRent[]> {
    return this.mediaRentRepository.find({
      order: {
        rent_from: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.mediaRentRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateMediaRentInput: UpdateMediaRentInput) {
    const rent = this.mediaRentRepository.create(updateMediaRentInput);
    rent.id = id;
    const one = await this.mediaRentRepository.findOne(rent.id);
    rent.rent_from = one.rent_from;
    rent.rent_till = one.rent_till;
    return this.mediaRentRepository.save(rent);
  }
}
