import { Module } from '@nestjs/common';
import { LibraryReservationService } from './library-reservation.service';
import { LibraryReservationResolver } from './library-reservation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryReservation } from './entities/library-reservation.entity';
import { LibraryReservationDateModule } from 'src/library-reservation-date/library-reservation-date.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LibraryReservation]),
    LibraryReservationDateModule,
  ],
  providers: [LibraryReservationResolver, LibraryReservationService],
  exports: [LibraryReservationService],
})
export class LibraryReservationModule {}
