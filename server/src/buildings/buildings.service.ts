import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buildings } from './entities/buildings.entity';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Buildings)
    private buildingsRepository: Repository<Buildings>,
  ) {}

  findAll(): Promise<Buildings[]> {
    return this.buildingsRepository.find({
      relations: ['room'],
    });
  }
}
