import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaResolver } from './media.resolver';
import { Media } from './entities/media.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  providers: [MediaResolver, MediaService],
  exports: [MediaService],
})
export class MediaModule {}
