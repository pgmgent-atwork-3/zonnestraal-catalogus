import { Module } from '@nestjs/common';
import { TransportReservationsService } from './transport-reservations.service';
import { TransportReservationsResolver } from './transport-reservations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportReservations } from './entities/transport-reservations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportReservations])],
  providers: [TransportReservationsResolver, TransportReservationsService],
  exports: [TransportReservationsService],
})
export class TransportReservationsModule {}
