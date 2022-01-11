import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsService } from './buildings.service';
import { Buildings } from './entities/buildings.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';
// import { CreateBuildingInput } from './dto/create-building.input';
// import { UpdateBuildingInput } from './dto/update-building.input';

@Resolver(() => Buildings)
export class BuildingsResolver {
  constructor(private readonly buildingsService: BuildingsService) {}

  // @Mutation(() => Buildings)
  // createBuilding(
  //   @Args('createBuildingInput') createBuildingInput: CreateBuildingInput,
  // ) {
  //   return this.buildingsService.create(createBuildingInput);
  // }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Buildings], { name: 'getAllbuildings' })
  findAll() {
    return this.buildingsService.findAll();
  }

  // @Query(() => Buildings, { name: 'building' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.buildingsService.findOne(id);
  // }

  // @Mutation(() => Buildings)
  // updateBuilding(
  //   @Args('updateBuildingInput') updateBuildingInput: UpdateBuildingInput,
  // ) {
  //   return this.buildingsService.update(
  //     updateBuildingInput.id,
  //     updateBuildingInput,
  //   );
  // }

  // @Mutation(() => Buildings)
  // removeBuilding(@Args('id', { type: () => Int }) id: number) {
  //   return this.buildingsService.remove(id);
  // }
}
