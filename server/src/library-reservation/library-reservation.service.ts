import { Injectable } from '@nestjs/common';
import { CreateLibraryReservationInput } from './dto/create-library-reservation.input';
import { UpdateLibraryReservationInput } from './dto/update-library-reservation.input';

@Injectable()
export class LibraryReservationService {
  create(createLibraryReservationInput: CreateLibraryReservationInput) {
    return 'This action adds a new libraryReservation';
  }

  findAll() {
    return `This action returns all libraryReservation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libraryReservation`;
  }

  update(
    id: number,
    updateLibraryReservationInput: UpdateLibraryReservationInput,
  ) {
    return `This action updates a #${id} libraryReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} libraryReservation`;
  }
}
