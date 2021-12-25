import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryResolver } from './library.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from './entities/library.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Library])],
  providers: [LibraryResolver, LibraryService],
  exports: [LibraryService],
})
export class LibraryModule {}
