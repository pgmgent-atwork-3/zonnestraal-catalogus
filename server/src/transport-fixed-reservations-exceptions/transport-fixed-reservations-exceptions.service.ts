import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportFixedReservationsExceptionInput } from './dto/create-transport-fixed-reservations-exception.input';
import { CreateTransportFixedReservationsExceptionsInput } from './dto/create-transport-fixed-reservations-exceptions.input';
import { DeleteTransportFixedReservationsExceptionsInput } from './dto/delete-transport-fixed-reservations-exception.input';
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

  findOne(id: number) {
    return this.transportFixedReservationsExceptionsRepository.findOneOrFail(
      id,
    );
  }

  async delete(
    deleteTransportFixedReservationsExceptionsInput: DeleteTransportFixedReservationsExceptionsInput,
  ) {
    return deleteTransportFixedReservationsExceptionsInput.transportFixedReservationExceptionsIds.map(
      async (id) => {
        const reservationException = await this.findOne(id);
        const deleted =
          this.transportFixedReservationsExceptionsRepository.remove(
            reservationException,
          );
        return deleted;
      },
    );
  }
}
