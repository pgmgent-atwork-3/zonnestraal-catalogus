import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingsFixedReservationInput } from './dto/create-buildings-fixed-reservation.input';
import { UpdateBuildingsFixedReservationInput } from './dto/update-buildings-fixed-reservation.input';
import { BuildingsFixedReservations } from './entities/buildings-fixed-reservations.entity';

@Injectable()
export class BuildingsFixedReservationsService {
  constructor(
    @InjectRepository(BuildingsFixedReservations)
    private buildingsFixedReservationsRepository: Repository<BuildingsFixedReservations>,
  ) {}

  async create(
    id: number,
    createBuildingsFixedReservationInput: CreateBuildingsFixedReservationInput,
  ) {
    const reservation = this.buildingsFixedReservationsRepository.create(
      createBuildingsFixedReservationInput,
    );
    reservation.profile_id = id;
    return this.buildingsFixedReservationsRepository.save(reservation);
  }

  findAll() {
    return `This action returns all buildingsFixedReservations`;
  }

  findAllForAdmin(): Promise<BuildingsFixedReservations[]> {
    return this.buildingsFixedReservationsRepository.find({
      order: {
        created_on: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingsFixedReservation`;
  }

  update(
    id: number,
    updateBuildingsFixedReservationInput: UpdateBuildingsFixedReservationInput,
  ) {
    return `This action updates a #${id} buildingsFixedReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingsFixedReservation`;
  }
}
