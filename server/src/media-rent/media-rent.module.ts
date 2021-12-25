import { Module } from '@nestjs/common';
import { MediaRentService } from './media-rent.service';
import { MediaRentResolver } from './media-rent.resolver';
import { MediaRent } from './entities/media-rent.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MediaRent])],
  providers: [MediaRentResolver, MediaRentService],
  exports: [MediaRentService],
})
export class MediaRentModule {}
