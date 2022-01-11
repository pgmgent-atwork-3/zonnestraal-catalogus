import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingInput } from './dto/create-building.input';
import { UpdateBuildingInput } from './dto/update-building.input';
import { Buildings } from './entities/buildings.entity';


@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Buildings)
    private buildingsRepository: Repository<Buildings>,
  ) {}
  create(createBuildingInput: CreateBuildingInput) {
    return 'This action adds a new building';
  }

  findAll(): Promise<Buildings[]> {
    return this.buildingsRepository.find({
      relations: ['room'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} building`;
  }

  update(id: number, updateBuildingInput: UpdateBuildingInput) {
    return `This action updates a #${id} building`;
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
