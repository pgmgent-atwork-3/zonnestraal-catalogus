import { Module } from '@nestjs/common';
import { LibraryReservationDateService } from './library-reservation-date.service';
import { LibraryReservationDateResolver } from './library-reservation-date.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryReservationDate } from './entities/library-reservation-date.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LibraryReservationDate])],
  providers: [LibraryReservationDateResolver, LibraryReservationDateService],
  exports: [LibraryReservationDateService],
})
export class LibraryReservationDateModule {}
