import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';
import { MostPopularMedia } from './entities/most-popular-media';

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
      relations: ['type', 'location', 'fixedReservation', 'rent'],
    });
  }
  find(): Promise<MostPopularMedia[]> {
    return this.mediaRepository.query(
      'SELECT m.id, m.title, m.description, mt.title as type, count(mr.id) as total ' +
        'FROM zonnestr.media_rent mr ' +
        'JOIN media m on m.id = mr.media_id ' +
        'JOIN media_types mt ON m.type_id = mt.id ' +
        'GROUP BY mr.media_id ' +
        'ORDER BY total DESC ' +
        'LIMIT 3;',
    );
  }

  findOne(id: number) {
    return this.mediaRepository.findOne({
      relations: ['type', 'location', 'fixedReservation', 'rent'],
      where: { id: id },
    });
  }

  // update(id: number, updateMediaInput: UpdateMediaInput) {
  //   return `This action updates a #${id} media`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} media`;
  // }
}
