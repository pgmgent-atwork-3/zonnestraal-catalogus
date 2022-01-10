import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLibraryReservationDateInput } from 'src/library-reservation-date/dto/create-library-reservation-date.input';
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
    const savedReservation = await this.libraryReservationRepository.save(
      reservation,
    );
    savedReservation.reservationDate =
      await this.libraryReservationDateService.create(
        createLibraryReservationDateInput,
        savedReservation.id,
      );
    return savedReservation;
  }

  findAll(id: number) {
    return this.libraryReservationRepository.find({
      where: { profile_id: id },
    });
  }

  findAllForAdmin(): Promise<LibraryReservation[]> {
    return this.libraryReservationRepository.find({
      order: {
        created_on: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.libraryReservationRepository.findOneOrFail(id);
  }
  update(
    id: number,
    updateLibraryReservationInput: UpdateLibraryReservationInput,
  ) {
    const reservation = this.libraryReservationRepository.create(
      updateLibraryReservationInput,
    );
    reservation.id = id;
    return this.libraryReservationRepository.save(reservation);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.libraryReservationRepository.remove(reservation);
  }
}
