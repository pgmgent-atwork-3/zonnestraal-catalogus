import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingsRoomsReservationInput } from './dto/create-buildings-rooms-reservation.input';
import { BuildingsRoomsReservations } from './entities/buildings-rooms-reservations.entity';

@Injectable()
export class BuildingsRoomsReservationsService {
  constructor(
    @InjectRepository(BuildingsRoomsReservations)
    private buildingsRoomsReservationsRepository: Repository<BuildingsRoomsReservations>,
  ) {}
  async create(
    id: number,
    createBuildingsRoomsReservationInput: CreateBuildingsRoomsReservationInput,
  ) {
    const reservation = this.buildingsRoomsReservationsRepository.create(
      createBuildingsRoomsReservationInput,
    );
    reservation.profile_id = id;
    return this.buildingsRoomsReservationsRepository.save(reservation);
  }

  findAll(id: number) {
    return this.buildingsRoomsReservationsRepository.find({
      where: { profile_id: id },
    });
  }

  findAllForAdmin(): Promise<BuildingsRoomsReservations[]> {
    return this.buildingsRoomsReservationsRepository.find({
      order: {
        created_on: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.buildingsRoomsReservationsRepository.findOneOrFail(id);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.buildingsRoomsReservationsRepository.remove(reservation);
  }
}
