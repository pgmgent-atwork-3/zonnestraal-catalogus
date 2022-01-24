import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BuildingsRooms } from './entities/buildings-rooms.entity';

@Injectable()
export class BuildingsRoomsService {
  constructor(
    @InjectRepository(BuildingsRooms)
    private buildingsRoomsRepository: Repository<BuildingsRooms>,
  ) {}

  findAll(): Promise<BuildingsRooms[]> {
    return this.buildingsRoomsRepository.find({
      relations: ['building', 'roomReservation', 'fixedReservation'],
    });
  }

  findOne(id: number) {
    return this.buildingsRoomsRepository.findOne({
      relations: ['roomReservation', 'fixedReservation'],
      where: { id: id },
    });
  }
}
