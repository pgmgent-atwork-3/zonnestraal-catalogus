import { Injectable } from '@nestjs/common';
import { CreateLibraryRentInput } from './dto/create-library-rent.input';
import { UpdateLibraryRentInput } from './dto/update-library-rent.input';

@Injectable()
export class LibraryRentService {
  create(createLibraryRentInput: CreateLibraryRentInput) {
    return 'This action adds a new libraryRent';
  }

  findAll() {
    return `This action returns all libraryRent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libraryRent`;
  }

  update(id: number, updateLibraryRentInput: UpdateLibraryRentInput) {
    return `This action updates a #${id} libraryRent`;
  }

  remove(id: number) {
    return `This action removes a #${id} libraryRent`;
  }
}
