import { Module } from '@nestjs/common';
import { TransportFixedReservationsExceptionsService } from './transport-fixed-reservations-exceptions.service';
import { TransportFixedReservationsExceptionsResolver } from './transport-fixed-reservations-exceptions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportFixedReservationsExceptions } from './entities/transport-fixed-reservations-exceptions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportFixedReservationsExceptions])],
  providers: [
    TransportFixedReservationsExceptionsResolver,
    TransportFixedReservationsExceptionsService,
  ],
  exports: [TransportFixedReservationsExceptionsService],
})
export class TransportFixedReservationsExceptionsModule {}
