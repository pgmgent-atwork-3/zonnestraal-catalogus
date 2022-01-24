import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibraryRentInput } from './dto/create-library-rent.input';
import { UpdateLibraryRentInput } from './dto/update-library-rent.input';
import { LibraryRent } from './entities/library-rent.entity';

@Injectable()
export class LibraryRentService {
  constructor(
    @InjectRepository(LibraryRent)
    private libraryRentRepository: Repository<LibraryRent>,
  ) {}
  async create(id: number, createLibraryRentInput: CreateLibraryRentInput) {
    const rent = this.libraryRentRepository.create(createLibraryRentInput);
    rent.profile_id = id;
    return this.libraryRentRepository.save(rent);
  }

  update(id: number, updateLibraryRentInput: UpdateLibraryRentInput) {
    const rent = this.libraryRentRepository.create(updateLibraryRentInput);
    rent.id = id;
    return this.libraryRentRepository.save(rent);
  }
}
