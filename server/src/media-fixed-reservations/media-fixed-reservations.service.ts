import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaFixedReservationsInput } from './dto/create-media-fixed-reservations.input';
import { UpdateMediaFixedReservationsInput } from './dto/update-media-fixed-reservations.input';
import { MediaFixedReservations } from './entities/media-fixed-reservations.entity';

@Injectable()
export class MediaFixedReservationsService {
  constructor(
    @InjectRepository(MediaFixedReservations)
    private mediaFixedReservationsRepository: Repository<MediaFixedReservations>,
  ) {}
  create(createMediaFixedReservationsInput: CreateMediaFixedReservationsInput) {
    return 'This action adds a new mediaFixedReservation';
  }

  findAllForAdmin(): Promise<MediaFixedReservations[]> {
    return this.mediaFixedReservationsRepository.find({
      order: {
        created_on: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaFixedReservation`;
  }

  update(
    id: number,
    updateMediaFixedReservationsInput: UpdateMediaFixedReservationsInput,
  ) {
    return `This action updates a #${id} mediaFixedReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaFixedReservation`;
  }
}
