import { Module } from '@nestjs/common';
import { MediaTypesService } from './media-types.service';
import { MediaTypesResolver } from './media-types.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaTypes } from './entities/media-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaTypes])],
  providers: [MediaTypesResolver, MediaTypesService],
  exports: [MediaTypesService],
})
export class MediaTypesModule {}
