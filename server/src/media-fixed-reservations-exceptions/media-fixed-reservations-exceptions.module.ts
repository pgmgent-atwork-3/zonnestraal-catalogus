import { Module } from '@nestjs/common';
import { MediaFixedReservationsExceptionsService } from './media-fixed-reservations-exceptions.service';
import { MediaFixedReservationsExceptionsResolver } from './media-fixed-reservations-exceptions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaFixedReservationsExceptions } from './entities/media-fixed-reservations-exceptions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaFixedReservationsExceptions])],
  providers: [
    MediaFixedReservationsExceptionsResolver,
    MediaFixedReservationsExceptionsService,
  ],
  exports: [MediaFixedReservationsExceptionsService],
})
export class MediaFixedReservationsExceptionsModule {}
