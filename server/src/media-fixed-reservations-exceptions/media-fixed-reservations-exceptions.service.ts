import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaFixedReservationsExceptionInput } from './dto/create-media-fixed-reservations-exception.input';
import { CreateMediaFixedReservationsExceptionsInput } from './dto/create-media-fixed-reservations-exceptions.input';
import { DeleteMediaFixedReservationExceptionsInput } from './dto/delete-media-fixed-reservations-exceptions.input';
import { MediaFixedReservationsExceptions } from './entities/media-fixed-reservations-exceptions.entity';

@Injectable()
export class MediaFixedReservationsExceptionsService {
  constructor(
    @InjectRepository(MediaFixedReservationsExceptions)
    private mediaFixedReservationsExceptionsRepository: Repository<MediaFixedReservationsExceptions>,
  ) {}

  async create(
    createMediaFixedReservationsExceptionsInput: CreateMediaFixedReservationsExceptionsInput,
  ) {
    const id =
      createMediaFixedReservationsExceptionsInput.media_fixed_reservations_id;
    return createMediaFixedReservationsExceptionsInput.dates.map((d) => {
      const mediaFixedReservationsExceptionInput: CreateMediaFixedReservationsExceptionInput =
        {
          media_fixed_reservations_id: id,
          date: d,
        };
      const reservationException =
        this.mediaFixedReservationsExceptionsRepository.create(
          mediaFixedReservationsExceptionInput,
        );
      return this.mediaFixedReservationsExceptionsRepository.save(
        reservationException,
      );
    });
  }

  findOne(id: number) {
    return this.mediaFixedReservationsExceptionsRepository.findOneOrFail(id);
  }

  async delete(
    deleteMediaFixedReservationsExceptionInput: DeleteMediaFixedReservationExceptionsInput,
  ) {
    return deleteMediaFixedReservationsExceptionInput.mediaFixedReservationExceptionsIds.map(
      async (id) => {
        const reservationException = await this.findOne(id);
        const deleted =
          this.mediaFixedReservationsExceptionsRepository.remove(
            reservationException,
          );
        return deleted;
      },
    );
  }
}
