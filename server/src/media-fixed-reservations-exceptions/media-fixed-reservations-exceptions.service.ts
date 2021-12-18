import { Injectable } from '@nestjs/common';
import { CreateMediaFixedReservationsExceptionsInput } from './dto/create-media-fixed-reservations-exceptions.input';
import { UpdateMediaFixedReservationsExceptionsInput } from './dto/update-media-fixed-reservations-exceptions.input';

@Injectable()
export class MediaFixedReservationsExceptionsService {
  create(createMediaFixedReservationsExceptionsInput: CreateMediaFixedReservationsExceptionsInput) {
    return 'This action adds a new mediaFixedReservationsException';
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
