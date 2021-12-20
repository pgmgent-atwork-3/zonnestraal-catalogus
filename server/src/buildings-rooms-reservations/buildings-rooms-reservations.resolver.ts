import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsRoomsReservationsService } from './buildings-rooms-reservations.service';
import { BuildingsRoomsReservations } from './entities/buildings-rooms-reservations.entity';
import { CreateBuildingsRoomsReservationInput } from './dto/create-buildings-rooms-reservation.input';
import { UpdateBuildingsRoomsReservationInput } from './dto/update-buildings-rooms-reservation.input';

@Resolver(() => BuildingsRoomsReservations)
export class BuildingsRoomsReservationsResolver {
  constructor(private readonly buildingsRoomsReservationsService: BuildingsRoomsReservationsService) {}

  @Mutation(() => BuildingsRoomsReservations)
  createBuildingsRoomsReservation(@Args('createBuildingsRoomsReservationInput') createBuildingsRoomsReservationInput: CreateBuildingsRoomsReservationInput) {
    return this.buildingsRoomsReservationsService.create(createBuildingsRoomsReservationInput);
  }

  @Query(() => [BuildingsRoomsReservations], { name: 'buildingsRoomsReservations' })
  findAll() {
    return this.buildingsRoomsReservationsService.findAll();
  }

  @Query(() => BuildingsRoomsReservations, { name: 'buildingsRoomsReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsRoomsReservationsService.findOne(id);
  }

  @Mutation(() => BuildingsRoomsReservations)
  updateBuildingsRoomsReservation(@Args('updateBuildingsRoomsReservationInput') updateBuildingsRoomsReservationInput: UpdateBuildingsRoomsReservationInput) {
    return this.buildingsRoomsReservationsService.update(updateBuildingsRoomsReservationInput.id, updateBuildingsRoomsReservationInput);
  }

  @Mutation(() => BuildingsRoomsReservations)
  removeBuildingsRoomsReservation(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsRoomsReservationsService.remove(id);
  }
}
