import { Module } from '@nestjs/common';
import { LibraryRentService } from './library-rent.service';
import { LibraryRentResolver } from './library-rent.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryRent } from './entities/library-rent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LibraryRent])],
  providers: [LibraryRentResolver, LibraryRentService],
  exports: [LibraryRentService],
})
export class LibraryRentModule {}
