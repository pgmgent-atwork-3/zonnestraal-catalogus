import { Injectable } from '@nestjs/common';
import { CreateBuildingsFixedReservationsExceptionInput } from './dto/create-buildings-fixed-reservations-exception.input';
import { UpdateBuildingsFixedReservationsExceptionInput } from './dto/update-buildings-fixed-reservations-exception.input';

@Injectable()
export class BuildingsFixedReservationsExceptionsService {
  create(createBuildingsFixedReservationsExceptionInput: CreateBuildingsFixedReservationsExceptionInput) {
    return 'This action adds a new buildingsFixedReservationsException';
  }

  findAll() {
    return `This action returns all buildingsFixedReservationsExceptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingsFixedReservationsException`;
  }

  update(id: number, updateBuildingsFixedReservationsExceptionInput: UpdateBuildingsFixedReservationsExceptionInput) {
    return `This action updates a #${id} buildingsFixedReservationsException`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingsFixedReservationsException`;
  }
}
