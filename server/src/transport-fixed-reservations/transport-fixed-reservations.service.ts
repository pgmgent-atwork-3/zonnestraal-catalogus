import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportFixedReservationInput } from './dto/create-transport-fixed-reservation.input';
import { TransportFixedReservations } from './entities/transport-fixed-reservations.entity';

@Injectable()
export class TransportFixedReservationsService {
  constructor(
    @InjectRepository(TransportFixedReservations)
    private transportFixedReservationsRepository: Repository<TransportFixedReservations>,
  ) {}

  async create(
    id: number,
    createTransportFixedReservationInput: CreateTransportFixedReservationInput,
  ) {
    const reservation = this.transportFixedReservationsRepository.create(
      createTransportFixedReservationInput,
    );
    reservation.profile_id = id;
    return this.transportFixedReservationsRepository.save(reservation);
  }

  findAll(): Promise<TransportFixedReservations[]> {
    return this.transportFixedReservationsRepository.find({
      relations: ['excepions'],
    });
  }

  findAllForAdmin(): Promise<TransportFixedReservations[]> {
    return this.transportFixedReservationsRepository.find({
      order: {
        created_on: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.transportFixedReservationsRepository.findOneOrFail(id);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.transportFixedReservationsRepository.remove(reservation);
  }
}
