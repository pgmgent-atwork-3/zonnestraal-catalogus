import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingsFixedReservationExceptionsInput } from './dto/create-buildings-fixed-reservations-exceptions.input';
import { CreateBuildingsFixedReservationsExceptionInput } from './dto/create-buildings-fixed-reservations-exception.input';
//import { UpdateBuildingsFixedReservationsExceptionInput } from './dto/update-buildings-fixed-reservations-exception.input';
import { BuildingsFixedReservationsExceptions } from './entities/buildings-fixed-reservations-exceptions.entity';
import { DeleteBuildingsFixedReservationExceptionsInput } from './dto/delete-buildings-fixed-reservations-exceptions.input';

@Injectable()
export class BuildingsFixedReservationsExceptionsService {
  constructor(
    @InjectRepository(BuildingsFixedReservationsExceptions)
    private buildingsFixedReservationsRepository: Repository<BuildingsFixedReservationsExceptions>,
  ) {}

  async create(
    createBuildingsFixedReservationsExceptionInput: CreateBuildingsFixedReservationExceptionsInput,
  ) {
    const id =
      createBuildingsFixedReservationsExceptionInput.buildings_fixed_reservations_id;
    return createBuildingsFixedReservationsExceptionInput.dates.map((d) => {
      const buildingsFixedReservationExceptionInput: CreateBuildingsFixedReservationsExceptionInput =
        {
          buildings_fixed_reservations_id: id,
          date: d,
        };
      const reservationException =
        this.buildingsFixedReservationsRepository.create(
          buildingsFixedReservationExceptionInput,
        );
      return this.buildingsFixedReservationsRepository.save(
        reservationException,
      );
    });
  }

  async delete(
    deleteBuildingsFixedReservationsExceptionInput: DeleteBuildingsFixedReservationExceptionsInput,
  ) {
    return deleteBuildingsFixedReservationsExceptionInput.buildingsFixedReservationExceptionsIds.map(
      async (id) => {
        const reservationException = await this.findOne(id);
        const deleted =
          this.buildingsFixedReservationsRepository.remove(
            reservationException,
          );
        return deleted;
      },
    );
  }

  findOne(id: number) {
    return this.buildingsFixedReservationsRepository.findOneOrFail(id);
  }
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
