import { Injectable } from '@nestjs/common';
import { CreateLibraryReservationDateInput } from './dto/create-library-reservation-date.input';
import { UpdateLibraryReservationDateInput } from './dto/update-library-reservation-date.input';

@Injectable()
export class LibraryReservationDateService {
  create(createLibraryReservationDateInput: CreateLibraryReservationDateInput) {
    return 'This action adds a new libraryReservationDate';
  }

  findAll() {
    return `This action returns all libraryReservationDate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libraryReservationDate`;
  }

  update(id: number, updateLibraryReservationDateInput: UpdateLibraryReservationDateInput) {
    return `This action updates a #${id} libraryReservationDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} libraryReservationDate`;
  }
}
