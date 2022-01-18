import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaFixedReservationsExceptionInput } from './dto/create-media-fixed-reservations-exception.input';
import { CreateMediaFixedReservationsExceptionsInput } from './dto/create-media-fixed-reservations-exceptions.input';
import { UpdateMediaFixedReservationsExceptionsInput } from './dto/update-media-fixed-reservations-exceptions.input';
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

  // findAll() {
  //   return `This action returns all mediaFixedReservationsExceptions`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} mediaFixedReservationsException`;
  // }

  // update(id: number, updateMediaFixedReservationsExceptionInput: UpdateMediaFixedReservationsExceptionInput) {
  //   return `This action updates a #${id} mediaFixedReservationsException`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} mediaFixedReservationsException`;
  // }
}
