import { Injectable } from '@nestjs/common';
import { CreateBuildingsRoomInput } from './dto/create-buildings-room.input';
import { UpdateBuildingsRoomInput } from './dto/update-buildings-room.input';

@Injectable()
export class BuildingsRoomsService {
  create(createBuildingsRoomInput: CreateBuildingsRoomInput) {
    return 'This action adds a new buildingsRoom';
  }

  findAll() {
    return `This action returns all buildingsRooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingsRoom`;
  }

  update(id: number, updateBuildingsRoomInput: UpdateBuildingsRoomInput) {
    return `This action updates a #${id} buildingsRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingsRoom`;
  }
}
