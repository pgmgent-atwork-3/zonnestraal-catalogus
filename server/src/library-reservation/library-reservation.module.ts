import { Module } from '@nestjs/common';
import { LibraryReservationService } from './library-reservation.service';
import { LibraryReservationResolver } from './library-reservation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryReservation } from './entities/library-reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LibraryReservation])],
  providers: [LibraryReservationResolver, LibraryReservationService],
  exports: [LibraryReservationService],
})
export class LibraryReservationModule {}
