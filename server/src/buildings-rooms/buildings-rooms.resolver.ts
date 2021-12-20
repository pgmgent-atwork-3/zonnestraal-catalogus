import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsRoomsService } from './buildings-rooms.service';
import { BuildingsRooms } from './entities/buildings-rooms.entity';
import { CreateBuildingsRoomInput } from './dto/create-buildings-room.input';
import { UpdateBuildingsRoomInput } from './dto/update-buildings-room.input';

@Resolver(() => BuildingsRooms)
export class BuildingsRoomsResolver {
  constructor(private readonly buildingsRoomsService: BuildingsRoomsService) {}

  @Mutation(() => BuildingsRooms)
  createBuildingsRoom(
    @Args('createBuildingsRoomInput')
    createBuildingsRoomInput: CreateBuildingsRoomInput,
  ) {
    return this.buildingsRoomsService.create(createBuildingsRoomInput);
  }

  @Query(() => [BuildingsRooms], { name: 'getAllbuildingsRooms' })
  findAll() {
    return this.buildingsRoomsService.findAll();
  }

  @Query(() => BuildingsRooms, { name: 'buildingsRoom' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsRoomsService.findOne(id);
  }

  @Mutation(() => BuildingsRooms)
  updateBuildingsRoom(
    @Args('updateBuildingsRoomInput')
    updateBuildingsRoomInput: UpdateBuildingsRoomInput,
  ) {
    return this.buildingsRoomsService.update(
      updateBuildingsRoomInput.id,
      updateBuildingsRoomInput,
    );
  }

  @Mutation(() => BuildingsRooms)
  removeBuildingsRoom(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsRoomsService.remove(id);
  }
}
