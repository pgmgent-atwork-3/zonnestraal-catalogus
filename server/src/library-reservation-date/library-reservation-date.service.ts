import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibraryReservationDateInput } from './dto/create-library-reservation-date.input';
import { LibraryReservationDate } from './entities/library-reservation-date.entity';

@Injectable()
export class LibraryReservationDateService {
  constructor(
    @InjectRepository(LibraryReservationDate)
    private libraryReservationDateRepository: Repository<LibraryReservationDate>,
  ) {}
  create(
    createLibraryReservationDateInput: CreateLibraryReservationDateInput,
    reservationId: number,
  ) {
    const term = this.libraryReservationDateRepository.create(
      createLibraryReservationDateInput,
    );
    term.library_reservation_id = reservationId;
    return this.libraryReservationDateRepository.save(term);
  }

  findOne(id: number) {
    return this.libraryReservationDateRepository.find({
      where: { library_reservation_id: id },
    });
  }
}
