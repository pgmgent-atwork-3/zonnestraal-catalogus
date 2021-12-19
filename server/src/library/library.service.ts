import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibraryInput } from './dto/create-library.input';
import { UpdateLibraryInput } from './dto/update-library.input';
import { Library } from './entities/library.entity';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private libraryRepository: Repository<Library>,
  ) {}
  // create(createLibraryInput: CreateLibraryInput) {
  //   return 'This action adds a new library';
  // }

  findAll(): Promise<Library[]> {
    return this.libraryRepository.find({
      relations: ['type', 'location', 'rent', 'reservation'],
    });
  }

  find(): Promise<Library[]> {
    return this.libraryRepository.find({
      order: {
        created_on: 'DESC',
      },
      take: 10,
      relations: ['type', 'location', 'rent', 'reservation'],
    });
  }

  findOne(id: number) {
    return this.libraryRepository.findOne({
      relations: ['type', 'location', 'rent', 'reservation'],
      where: { id: id },
    });
  }

  // update(id: number, updateLibraryInput: UpdateLibraryInput) {
  //   return `This action updates a #${id} library`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} library`;
  // }
}
