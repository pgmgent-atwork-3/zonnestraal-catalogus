import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsFixedReservationsService } from './buildings-fixed-reservations.service';
import { BuildingsFixedReservations } from './entities/buildings-fixed-reservations.entity';
import { CreateBuildingsFixedReservationInput } from './dto/create-buildings-fixed-reservation.input';
import { UpdateBuildingsFixedReservationInput } from './dto/update-buildings-fixed-reservation.input';

@Resolver(() => BuildingsFixedReservations)
export class BuildingsFixedReservationsResolver {
  constructor(private readonly buildingsFixedReservationsService: BuildingsFixedReservationsService) {}

  @Mutation(() => BuildingsFixedReservations)
  createBuildingsFixedReservation(@Args('createBuildingsFixedReservationInput') createBuildingsFixedReservationInput: CreateBuildingsFixedReservationInput) {
    return this.buildingsFixedReservationsService.create(createBuildingsFixedReservationInput);
  }

  @Query(() => [BuildingsFixedReservations], { name: 'buildingsFixedReservations' })
  findAll() {
    return this.buildingsFixedReservationsService.findAll();
  }

  @Query(() => BuildingsFixedReservations, { name: 'buildingsFixedReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsFixedReservationsService.findOne(id);
  }

  @Mutation(() => BuildingsFixedReservations)
  updateBuildingsFixedReservation(@Args('updateBuildingsFixedReservationInput') updateBuildingsFixedReservationInput: UpdateBuildingsFixedReservationInput) {
    return this.buildingsFixedReservationsService.update(updateBuildingsFixedReservationInput.id, updateBuildingsFixedReservationInput);
  }

  @Mutation(() => BuildingsFixedReservations)
  removeBuildingsFixedReservation(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsFixedReservationsService.remove(id);
  }
}
