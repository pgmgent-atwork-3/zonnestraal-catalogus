import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}
  // create(createMediaInput: CreateMediaInput) {
  //   return 'This action adds a new media';
  // }

  findAll(): Promise<Media[]> {
    return this.mediaRepository.find({
      relations: ['type', 'location'],
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} media`;
  // }

  // update(id: number, updateMediaInput: UpdateMediaInput) {
  //   return `This action updates a #${id} media`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} media`;
  // }
}
