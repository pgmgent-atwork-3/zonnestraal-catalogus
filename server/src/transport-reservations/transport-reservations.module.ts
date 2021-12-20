import { Module } from '@nestjs/common';
import { TransportReservationsService } from './transport-reservations.service';
import { TransportReservationsResolver } from './transport-reservations.resolver';

@Module({
  providers: [TransportReservationsResolver, TransportReservationsService],
})
export class TransportReservationsModule {}
