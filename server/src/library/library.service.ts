import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Library } from './entities/library.entity';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private libraryRepository: Repository<Library>,
  ) {}

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
}
