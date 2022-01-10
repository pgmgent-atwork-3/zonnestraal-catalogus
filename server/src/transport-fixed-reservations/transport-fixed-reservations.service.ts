import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportFixedReservationInput } from './dto/create-transport-fixed-reservation.input';
import { UpdateTransportFixedReservationInput } from './dto/update-transport-fixed-reservation.input';
import { TransportFixedReservations } from './entities/transport-fixed-reservations.entity';

@Injectable()
export class TransportFixedReservationsService {
  constructor(
    @InjectRepository(TransportFixedReservations)
    private transportFixedReservationsRepository: Repository<TransportFixedReservations>,
  ) {}
  create(
    createTransportFixedReservationInput: CreateTransportFixedReservationInput,
  ) {
    return 'This action adds a new transportFixedReservation';
  }

  findAll() {
    return `This action returns all transportFixedReservations`;
  }

  findAllForAdmin(): Promise<TransportFixedReservations[]> {
    return this.transportFixedReservationsRepository.find({
      order: {
        created_on: 'DESC',
      },
    });
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
