import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsFixedReservationsService } from './buildings-fixed-reservations.service';
import { BuildingsFixedReservations } from './entities/buildings-fixed-reservations.entity';
import { CreateBuildingsFixedReservationInput } from './dto/create-buildings-fixed-reservation.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => BuildingsFixedReservations)
export class BuildingsFixedReservationsResolver {
  constructor(
    private readonly buildingsFixedReservationsService: BuildingsFixedReservationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BuildingsFixedReservations, {
    name: 'createRoomFixedReservation',
  })
  createBuildingsFixedReservation(
    @Args('createBuildingsFixedReservationInput')
    createBuildingsFixedReservationInput: CreateBuildingsFixedReservationInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.buildingsFixedReservationsService.create(
        user.id,
        createBuildingsFixedReservationInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @Query(() => [BuildingsFixedReservations], {
    name: 'buildingsFixedReservations',
  })
  findAll() {
    return this.buildingsFixedReservationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [BuildingsFixedReservations], {
    name: 'getAllRoomsFixedReservationForAdmin',
  })
  findAllForAdmin(@GetUser() user) {
    if (user.isAdmin === true) {
      return this.buildingsFixedReservationsService.findAllForAdmin();
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @Query(() => BuildingsFixedReservations, {
    name: 'buildingsFixedReservation',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsFixedReservationsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BuildingsFixedReservations)
  removeBuildingsFixedReservation(
    @Args('id', { type: () => Int }) id: number,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.buildingsFixedReservationsService.remove(id);
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }
}
