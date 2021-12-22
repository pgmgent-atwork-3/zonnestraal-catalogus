import { Module } from '@nestjs/common';
import { BuildingsFixedReservationsService } from './buildings-fixed-reservations.service';
import { BuildingsFixedReservationsResolver } from './buildings-fixed-reservations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingsFixedReservations } from './entities/buildings-fixed-reservations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingsFixedReservations])],
  providers: [
    BuildingsFixedReservationsResolver,
    BuildingsFixedReservationsService,
  ],
  exports: [BuildingsFixedReservationsService],
})
export class BuildingsFixedReservationsModule {}
