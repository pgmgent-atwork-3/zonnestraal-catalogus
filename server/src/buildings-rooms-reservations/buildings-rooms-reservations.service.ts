import { Injectable } from '@nestjs/common';
import { CreateBuildingsRoomsReservationInput } from './dto/create-buildings-rooms-reservation.input';
import { UpdateBuildingsRoomsReservationInput } from './dto/update-buildings-rooms-reservation.input';

@Injectable()
export class BuildingsRoomsReservationsService {
  create(createBuildingsRoomsReservationInput: CreateBuildingsRoomsReservationInput) {
    return 'This action adds a new buildingsRoomsReservation';
  }

  findAll() {
    return `This action returns all buildingsRoomsReservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingsRoomsReservation`;
  }

  update(id: number, updateBuildingsRoomsReservationInput: UpdateBuildingsRoomsReservationInput) {
    return `This action updates a #${id} buildingsRoomsReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingsRoomsReservation`;
  }
}
