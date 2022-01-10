import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingsRoomsReservationInput } from './dto/create-buildings-rooms-reservation.input';
import { UpdateBuildingsRoomsReservationInput } from './dto/update-buildings-rooms-reservation.input';
import { BuildingsRoomsReservations } from './entities/buildings-rooms-reservations.entity';

@Injectable()
export class BuildingsRoomsReservationsService {
  constructor(
    @InjectRepository(BuildingsRoomsReservations)
    private BuildingsRoomsReservationsRepository: Repository<BuildingsRoomsReservations>,
  ) {}
  create(
    createBuildingsRoomsReservationInput: CreateBuildingsRoomsReservationInput,
  ) {
    return 'This action adds a new buildingsRoomsReservation';
  }

  findAll(id: number) {
    return this.BuildingsRoomsReservationsRepository.find({
      where: { profile_id: id },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingsRoomsReservation`;
  }

  update(
    id: number,
    updateBuildingsRoomsReservationInput: UpdateBuildingsRoomsReservationInput,
  ) {
    return `This action updates a #${id} buildingsRoomsReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingsRoomsReservation`;
  }
}
