import { Injectable } from '@nestjs/common';
import { CreateBuildingsFixedReservationInput } from './dto/create-buildings-fixed-reservation.input';
import { UpdateBuildingsFixedReservationInput } from './dto/update-buildings-fixed-reservation.input';

@Injectable()
export class BuildingsFixedReservationsService {
  create(createBuildingsFixedReservationInput: CreateBuildingsFixedReservationInput) {
    return 'This action adds a new buildingsFixedReservation';
  }

  findAll() {
    return `This action returns all buildingsFixedReservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingsFixedReservation`;
  }

  update(id: number, updateBuildingsFixedReservationInput: UpdateBuildingsFixedReservationInput) {
    return `This action updates a #${id} buildingsFixedReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingsFixedReservation`;
  }
}
