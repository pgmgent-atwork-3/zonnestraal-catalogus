import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateBuildingsFixedReservationsExceptionsInput } from './dto/create-buildings-fixed-reservations-exceptions.input';
// import { CreateBuildingsFixedReservationsExceptionInput } from './dto/create-buildings-fixed-reservations-exception.input';
//import { UpdateBuildingsFixedReservationsExceptionInput } from './dto/update-buildings-fixed-reservations-exception.input';
import { BuildingsFixedReservationsExceptions } from './entities/buildings-fixed-reservations-exceptions.entity';

@Injectable()
export class BuildingsFixedReservationsExceptionsService {
  constructor(
    @InjectRepository(BuildingsFixedReservationsExceptions)
    private buildingsFixedReservationsRepository: Repository<BuildingsFixedReservationsExceptions>,
  ) {}

  // async create(
  //   createBuildingsFixedReservationsExceptionInput: CreateBuildingsFixedReservationsExceptionsInput,
  // ) {
  //   const id =
  //     createBuildingsFixedReservationsExceptionInput.buildings_fixed_reservations_id;
  //   createBuildingsFixedReservationsExceptionInput.dates.forEach((d) => {
  //     const buildingsFixedReservationExceptionInput: CreateBuildingsFixedReservationsExceptionInput =
  //       {
  //         buildings_fixed_reservations_id: id,
  //         date: d,
  //       };
  //     const reservationException =
  //       this.buildingsFixedReservationsRepository.create(
  //       buildingsFixedReservationExceptionInput,
  //     );
  //     return this.buildingsFixedReservationsRepository.save(reservationException);
  //   })
  // }
  // findAll() {
  //   return `This action returns all buildingsFixedReservationsExceptions`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} buildingsFixedReservationsException`;
  // }

  // update(
  //   id: number,
  //   updateBuildingsFixedReservationsExceptionInput: UpdateBuildingsFixedReservationsExceptionInput,
  // ) {
  //   return `This action updates a #${id} buildingsFixedReservationsException`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} buildingsFixedReservationsException`;
  // }
}
