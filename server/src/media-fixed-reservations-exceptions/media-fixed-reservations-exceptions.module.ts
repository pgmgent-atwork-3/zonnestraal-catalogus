import { Module } from '@nestjs/common';
import { MediaFixedReservationsExceptionsService } from './media-fixed-reservations-exceptions.service';
import { MediaFixedReservationsExceptionsResolver } from './media-fixed-reservations-exceptions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaFixedReservationsException } from './entities/media-fixed-reservations-exception.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaFixedReservationsException])],
  providers: [
    MediaFixedReservationsExceptionsResolver,
    MediaFixedReservationsExceptionsService,
  ],
  exports: [MediaFixedReservationsExceptionsService],
})
export class MediaFixedReservationsExceptionsModule {}
