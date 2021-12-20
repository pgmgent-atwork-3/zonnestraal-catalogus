import { Module } from '@nestjs/common';
import { BuildingsRoomsReservationsService } from './buildings-rooms-reservations.service';
import { BuildingsRoomsReservationsResolver } from './buildings-rooms-reservations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingsRoomsReservations } from './entities/buildings-rooms-reservations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingsRoomsReservations])],
  providers: [
    BuildingsRoomsReservationsResolver,
    BuildingsRoomsReservationsService,
  ],
  exports: [BuildingsRoomsReservationsService],
})
export class BuildingsRoomsReservationsModule {}
