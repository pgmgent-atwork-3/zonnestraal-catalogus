import { Module } from '@nestjs/common';
import { TransportFixedReservationsExceptionsService } from './transport-fixed-reservations-exceptions.service';
import { TransportFixedReservationsExceptionsResolver } from './transport-fixed-reservations-exceptions.resolver';

@Module({
  providers: [TransportFixedReservationsExceptionsResolver, TransportFixedReservationsExceptionsService]
})
export class TransportFixedReservationsExceptionsModule {}
