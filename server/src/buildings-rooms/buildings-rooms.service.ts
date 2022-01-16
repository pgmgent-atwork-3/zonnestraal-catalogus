import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingsRoomInput } from './dto/create-buildings-room.input';
import { UpdateBuildingsRoomInput } from './dto/update-buildings-room.input';
import { BuildingsRooms } from './entities/buildings-rooms.entity';

@Injectable()
export class BuildingsRoomsService {
  constructor(
    @InjectRepository(BuildingsRooms)
    private buildingsRoomsRepository: Repository<BuildingsRooms>,
  ) {}
  create(createBuildingsRoomInput: CreateBuildingsRoomInput) {
    return 'This action adds a new buildingsRoom';
  }

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

  update(id: number, updateBuildingsRoomInput: UpdateBuildingsRoomInput) {
    return `This action updates a #${id} buildingsRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingsRoom`;
  }
}
