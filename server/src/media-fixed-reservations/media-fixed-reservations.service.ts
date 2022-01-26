import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaFixedReservationsInput } from './dto/create-media-fixed-reservations.input';
import { MediaFixedReservations } from './entities/media-fixed-reservations.entity';

@Injectable()
export class MediaFixedReservationsService {
  constructor(
    @InjectRepository(MediaFixedReservations)
    private mediaFixedReservationsRepository: Repository<MediaFixedReservations>,
  ) {}

  async create(
    id: number,
    createMediaFixedReservationsInput: CreateMediaFixedReservationsInput,
  ) {
    const reservation = this.mediaFixedReservationsRepository.create(
      createMediaFixedReservationsInput,
    );
    reservation.profile_id = id;
    return this.mediaFixedReservationsRepository.save(reservation);
  }

  findAllForAdmin(): Promise<MediaFixedReservations[]> {
    return this.mediaFixedReservationsRepository.find({
      order: {
        created_on: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.mediaFixedReservationsRepository.findOneOrFail(id);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.mediaFixedReservationsRepository.remove(reservation);
  }
}
