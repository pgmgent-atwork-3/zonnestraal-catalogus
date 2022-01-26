import { Resolver, Query } from '@nestjs/graphql';
import { BuildingsService } from './buildings.service';
import { Buildings } from './entities/buildings.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Buildings)
export class BuildingsResolver {
  constructor(private readonly buildingsService: BuildingsService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Buildings], { name: 'getAllbuildings' })
  findAll() {
    return this.buildingsService.findAll();
  }
}
