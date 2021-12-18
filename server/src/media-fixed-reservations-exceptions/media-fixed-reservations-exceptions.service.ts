import { Injectable } from '@nestjs/common';
import { CreateMediaFixedReservationsExceptionInput } from './dto/create-media-fixed-reservations-exception.input';
import { UpdateMediaFixedReservationsExceptionInput } from './dto/update-media-fixed-reservations-exception.input';

@Injectable()
export class MediaFixedReservationsExceptionsService {
  create(createMediaFixedReservationsExceptionInput: CreateMediaFixedReservationsExceptionInput) {
    return 'This action adds a new mediaFixedReservationsException';
  }

  findAll() {
    return `This action returns all mediaFixedReservationsExceptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaFixedReservationsException`;
  }

  update(id: number, updateMediaFixedReservationsExceptionInput: UpdateMediaFixedReservationsExceptionInput) {
    return `This action updates a #${id} mediaFixedReservationsException`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaFixedReservationsException`;
  }
}
