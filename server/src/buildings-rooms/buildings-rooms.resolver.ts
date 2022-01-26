import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { BuildingsRoomsService } from './buildings-rooms.service';
import { BuildingsRooms } from './entities/buildings-rooms.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => BuildingsRooms)
export class BuildingsRoomsResolver {
  constructor(private readonly buildingsRoomsService: BuildingsRoomsService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [BuildingsRooms], { name: 'getAllbuildingsRooms' })
  findAll() {
    return this.buildingsRoomsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => BuildingsRooms, { name: 'getOneBuildingsRoomById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsRoomsService.findOne(id);
  }
}
