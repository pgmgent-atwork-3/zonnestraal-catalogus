import { Module } from '@nestjs/common';
import { LibraryTypesService } from './library-types.service';
import { LibraryTypesResolver } from './library-types.resolver';
import { LibraryTypes } from './entities/library-types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LibraryTypes])],
  providers: [LibraryTypesResolver, LibraryTypesService],
  exports: [LibraryTypesService],
})
export class LibraryTypesModule {}
