import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsRoomsReservationsService } from './buildings-rooms-reservations.service';
import { BuildingsRoomsReservations } from './entities/buildings-rooms-reservations.entity';
import { CreateBuildingsRoomsReservationInput } from './dto/create-buildings-rooms-reservation.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => BuildingsRoomsReservations)
export class BuildingsRoomsReservationsResolver {
  constructor(
    private readonly buildingsRoomsReservationsService: BuildingsRoomsReservationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BuildingsRoomsReservations, { name: 'createRoomReservation' })
  createBuildingsRoomsReservation(
    @Args('createBuildingsRoomsReservationInput')
    createBuildingsRoomsReservationInput: CreateBuildingsRoomsReservationInput,
    @GetUser() user,
  ) {
    return this.buildingsRoomsReservationsService.create(
      user.id,
      createBuildingsRoomsReservationInput,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [BuildingsRoomsReservations], {
    name: 'getAllRoomsReservationForAdmin',
  })
  findAllForAdmin(@GetUser() user) {
    if (user.isAdmin === true) {
      return this.buildingsRoomsReservationsService.findAllForAdmin();
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [BuildingsRoomsReservations], {
    name: 'GetAllRoomsReservationByUser',
  })
  findAll(@GetUser() user) {
    return this.buildingsRoomsReservationsService.findAll(user.id);
  }

  @Query(() => BuildingsRoomsReservations, {
    name: 'buildingsRoomsReservation',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsRoomsReservationsService.findOne(id);
  }

  @Mutation(() => BuildingsRoomsReservations)
  removeBuildingsRoomsReservation(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsRoomsReservationsService.remove(id);
  }
}
