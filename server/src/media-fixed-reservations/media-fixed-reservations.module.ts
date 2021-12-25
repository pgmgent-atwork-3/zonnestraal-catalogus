import { Module } from '@nestjs/common';
import { MediaFixedReservationsService } from './media-fixed-reservations.service';
import { MediaFixedReservationsResolver } from './media-fixed-reservations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaFixedReservations } from './entities/media-fixed-reservations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaFixedReservations])],
  providers: [MediaFixedReservationsResolver, MediaFixedReservationsService],
  exports: [MediaFixedReservationsService],
})
export class MediaFixedReservationsModule {}
