import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportFixedReservationsExceptionInput } from './dto/create-transport-fixed-reservations-exception.input';
import { CreateTransportFixedReservationsExceptionsInput } from './dto/create-transport-fixed-reservations-exceptions.input';
import { UpdateTransportFixedReservationsExceptionInput } from './dto/update-transport-fixed-reservations-exception.input';
import { TransportFixedReservationsExceptions } from './entities/transport-fixed-reservations-exceptions.entity';

@Injectable()
export class TransportFixedReservationsExceptionsService {
  constructor(
    @InjectRepository(TransportFixedReservationsExceptions)
    private transportFixedReservationsExceptionsRepository: Repository<TransportFixedReservationsExceptions>,
  ) {}
  async create(
    createTransportFixedReservationsExceptionInput: CreateTransportFixedReservationsExceptionInput,
  ) {
    const id =
      createTransportFixedReservationsExceptionInput.transport_fixed_reservations_id;
    return createTransportFixedReservationsExceptionInput.dates.map((d) => {
      const transportFixedReservationsExceptionsInput: CreateTransportFixedReservationsExceptionsInput =
        {
          transport_fixed_reservations_id: id,
          date: d,
        };
      const reservationException =
        this.transportFixedReservationsExceptionsRepository.create(
          transportFixedReservationsExceptionsInput,
        );
      return this.transportFixedReservationsExceptionsRepository.save(
        reservationException,
      );
    });
  }

  findAll() {
    return `This action returns all transportFixedReservationsExceptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transportFixedReservationsException`;
  }

  update(
    id: number,
    updateTransportFixedReservationsExceptionInput: UpdateTransportFixedReservationsExceptionInput,
  ) {
    return `This action updates a #${id} transportFixedReservationsException`;
  }

  remove(id: number) {
    return `This action removes a #${id} transportFixedReservationsException`;
  }
}
