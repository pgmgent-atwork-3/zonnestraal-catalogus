import { Injectable } from '@nestjs/common';
import { CreateTransportReservationInput } from './dto/create-transport-reservation.input';
import { UpdateTransportReservationInput } from './dto/update-transport-reservation.input';

@Injectable()
export class TransportReservationsService {
  create(createTransportReservationInput: CreateTransportReservationInput) {
    return 'This action adds a new transportReservation';
  }

  findAll() {
    return `This action returns all transportReservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transportReservation`;
  }

  update(
    id: number,
    updateTransportReservationInput: UpdateTransportReservationInput,
  ) {
    return `This action updates a #${id} transportReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} transportReservation`;
  }
}
