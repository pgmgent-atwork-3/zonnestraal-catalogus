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
  async create(
    id: number,
    createTransportReservationInput: CreateTransportReservationInput,
  ) {
    const reservation = this.transportReservationsRepository.create(
      createTransportReservationInput,
    );
    reservation.profile_id = id;
    return this.transportReservationsRepository.save(reservation);
  }

  findAll(id: number) {
    return this.transportReservationsRepository.find({
      where: { profile_id: id },
    });
  }

  findOne(id: number) {
    return this.transportReservationsRepository.findOneOrFail(id);
  }

  update(
    id: number,
    updateTransportReservationInput: UpdateTransportReservationInput,
  ) {
    return `This action updates a #${id} transportReservation`;
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.transportReservationsRepository.remove(reservation);
  }
}
