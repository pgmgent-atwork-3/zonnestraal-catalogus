import { Injectable } from '@nestjs/common';
import { CreateMediaFixedReservationInput } from './dto/create-media-fixed-reservation.input';
import { UpdateMediaFixedReservationInput } from './dto/update-media-fixed-reservation.input';

@Injectable()
export class MediaFixedReservationsService {
  create(createMediaFixedReservationInput: CreateMediaFixedReservationInput) {
    return 'This action adds a new mediaFixedReservation';
  }

  findAll() {
    return `This action returns all mediaFixedReservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaFixedReservation`;
  }

  update(id: number, updateMediaFixedReservationInput: UpdateMediaFixedReservationInput) {
    return `This action updates a #${id} mediaFixedReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaFixedReservation`;
  }
}
