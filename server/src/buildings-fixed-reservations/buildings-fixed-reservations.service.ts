import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingsFixedReservationInput } from './dto/create-buildings-fixed-reservation.input';
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
    return this.buildingsFixedReservationsRepository.findOneOrFail(id);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.buildingsFixedReservationsRepository.remove(reservation);
  }
}
