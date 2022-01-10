import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportReservationInput } from './dto/create-transport-reservation.input';
import { UpdateTransportReservationInput } from './dto/update-transport-reservation.input';
import { TransportReservations } from './entities/transport-reservations.entity';

@Injectable()
export class TransportReservationsService {
  constructor(
    @InjectRepository(TransportReservations)
    private transportReservationsRepository: Repository<TransportReservations>,
  ) {}
  create(createTransportReservationInput: CreateTransportReservationInput) {
    return 'This action adds a new transportReservation';
  }

  // findAll() {
  //   return `This action returns all transportReservations`;
  // }

  findAll(id: number) {
    return this.transportReservationsRepository.find({
      where: { profile_id: id },
    });
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
