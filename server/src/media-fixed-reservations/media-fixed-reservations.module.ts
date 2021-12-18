import { Module } from '@nestjs/common';
import { MediaFixedReservationsService } from './media-fixed-reservations.service';
import { MediaFixedReservationsResolver } from './media-fixed-reservations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaFixedReservation } from './entities/media-fixed-reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaFixedReservation])],
  providers: [MediaFixedReservationsResolver, MediaFixedReservationsService],
  exports: [MediaFixedReservationsService],
})
export class MediaFixedReservationsModule {}
