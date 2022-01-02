import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLibraryReservationDateInput } from 'src/library-reservation-date/dto/create-library-reservation-date.input';
import { LibraryReservationDate } from 'src/library-reservation-date/entities/library-reservation-date.entity';
import { LibraryReservationDateService } from 'src/library-reservation-date/library-reservation-date.service';
import { Repository } from 'typeorm';
import { CreateLibraryReservationInput } from './dto/create-library-reservation.input';
import { UpdateLibraryReservationInput } from './dto/update-library-reservation.input';
import { LibraryReservation } from './entities/library-reservation.entity';

@Injectable()
export class LibraryReservationService {
  constructor(
    @InjectRepository(LibraryReservation)
    private libraryReservationRepository: Repository<LibraryReservation>,
    private libraryReservationDateService: LibraryReservationDateService,
  ) {}

  async create(
    id: number,
    createLibraryReservationInput: CreateLibraryReservationInput,
    createLibraryReservationDateInput: CreateLibraryReservationDateInput,
  ) {
    const reservation = this.libraryReservationRepository.create(
      createLibraryReservationInput,
    );
    reservation.profile_id = id;
    // const term: LibraryReservationDate =
    //   await this.libraryReservationDateService.create(
    //     createLibraryReservationDateInput,
    //   );
    // // reservation.term = await this.libraryReservationDateService.create<any[]>(
    //   createLibraryReservationDateInput,
    // );
    // term.library_reservation_id = reservation.id;
    const term = await this.libraryReservationDateService.create(
      createLibraryReservationDateInput,
    );
    // const d = this.libraryReservationDateService.create(
    //   createLibraryReservationDateInput,
    // );
    term.library_reservation_id = reservation.id;

    //reservation.term = term;
    return this.libraryReservationRepository.save(reservation);
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
