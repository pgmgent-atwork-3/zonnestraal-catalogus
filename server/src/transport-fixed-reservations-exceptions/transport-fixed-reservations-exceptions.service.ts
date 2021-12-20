import { Injectable } from '@nestjs/common';
import { CreateTransportFixedReservationsExceptionInput } from './dto/create-transport-fixed-reservations-exception.input';
import { UpdateTransportFixedReservationsExceptionInput } from './dto/update-transport-fixed-reservations-exception.input';

@Injectable()
export class TransportFixedReservationsExceptionsService {
  create(createTransportFixedReservationsExceptionInput: CreateTransportFixedReservationsExceptionInput) {
    return 'This action adds a new transportFixedReservationsException';
  }

  findAll() {
    return `This action returns all transportFixedReservationsExceptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transportFixedReservationsException`;
  }

  update(id: number, updateTransportFixedReservationsExceptionInput: UpdateTransportFixedReservationsExceptionInput) {
    return `This action updates a #${id} transportFixedReservationsException`;
  }

  remove(id: number) {
    return `This action removes a #${id} transportFixedReservationsException`;
  }
}
