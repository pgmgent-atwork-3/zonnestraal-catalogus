import { Module } from '@nestjs/common';
import { BuildingsFixedReservationsExceptionsService } from './buildings-fixed-reservations-exceptions.service';
import { BuildingsFixedReservationsExceptionsResolver } from './buildings-fixed-reservations-exceptions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingsFixedReservationsExceptions } from './entities/buildings-fixed-reservations-exceptions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingsFixedReservationsExceptions])],
  providers: [
    BuildingsFixedReservationsExceptionsResolver,
    BuildingsFixedReservationsExceptionsService,
  ],
  exports: [BuildingsFixedReservationsExceptionsService],
})
export class BuildingsFixedReservationsExceptionsModule {}
