import { Injectable } from '@nestjs/common';
import { CreateTransportFixedReservationInput } from './dto/create-transport-fixed-reservation.input';
import { UpdateTransportFixedReservationInput } from './dto/update-transport-fixed-reservation.input';

@Injectable()
export class TransportFixedReservationsService {
  create(
    createTransportFixedReservationInput: CreateTransportFixedReservationInput,
  ) {
    return 'This action adds a new transportFixedReservation';
  }

  findAll() {
    return `This action returns all transportFixedReservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transportFixedReservation`;
  }

  update(
    id: number,
    updateTransportFixedReservationInput: UpdateTransportFixedReservationInput,
  ) {
    return `This action updates a #${id} transportFixedReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} transportFixedReservation`;
  }
}
