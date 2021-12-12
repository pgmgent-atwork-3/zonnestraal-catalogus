import { Injectable } from '@nestjs/common';
import { CreateLibraryTypeInput } from './dto/create-library-type.input';
import { UpdateLibraryTypeInput } from './dto/update-library-type.input';

@Injectable()
export class LibraryTypesService {
  create(createLibraryTypeInput: CreateLibraryTypeInput) {
    return 'This action adds a new libraryType';
  }

  findAll() {
    return `This action returns all libraryTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libraryType`;
  }

  update(id: number, updateLibraryTypeInput: UpdateLibraryTypeInput) {
    return `This action updates a #${id} libraryType`;
  }

  remove(id: number) {
    return `This action removes a #${id} libraryType`;
  }
}
