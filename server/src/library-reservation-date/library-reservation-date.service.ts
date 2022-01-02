import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibraryReservationDateInput } from './dto/create-library-reservation-date.input';
import { UpdateLibraryReservationDateInput } from './dto/update-library-reservation-date.input';
import { LibraryReservationDate } from './entities/library-reservation-date.entity';

@Injectable()
export class LibraryReservationDateService {
  constructor(
    @InjectRepository(LibraryReservationDate)
    private libraryReservationDateRepository: Repository<LibraryReservationDate>,
  ) {}
  create(createLibraryReservationDateInput: CreateLibraryReservationDateInput) {
    const term = this.libraryReservationDateRepository.create(
      createLibraryReservationDateInput,
    );
    return this.libraryReservationDateRepository.save(term);
  }

  findAll() {
    return `This action returns all libraryReservationDate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libraryReservationDate`;
  }

  update(
    id: number,
    updateLibraryReservationDateInput: UpdateLibraryReservationDateInput,
  ) {
    return `This action updates a #${id} libraryReservationDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} libraryReservationDate`;
  }
}
