import { Module } from '@nestjs/common';
import { TransportFixedReservationsService } from './transport-fixed-reservations.service';
import { TransportFixedReservationsResolver } from './transport-fixed-reservations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportFixedReservations } from './entities/transport-fixed-reservations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportFixedReservations])],
  providers: [
    TransportFixedReservationsResolver,
    TransportFixedReservationsService,
  ],
  exports: [TransportFixedReservationsService],
})
export class TransportFixedReservationsModule {}
