import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaFixedReservationsService } from './media-fixed-reservations.service';
import { MediaFixedReservation } from './entities/media-fixed-reservation.entity';
import { CreateMediaFixedReservationInput } from './dto/create-media-fixed-reservation.input';
import { UpdateMediaFixedReservationInput } from './dto/update-media-fixed-reservation.input';

@Resolver(() => MediaFixedReservation)
export class MediaFixedReservationsResolver {
  constructor(private readonly mediaFixedReservationsService: MediaFixedReservationsService) {}

  @Mutation(() => MediaFixedReservation)
  createMediaFixedReservation(@Args('createMediaFixedReservationInput') createMediaFixedReservationInput: CreateMediaFixedReservationInput) {
    return this.mediaFixedReservationsService.create(createMediaFixedReservationInput);
  }

  @Query(() => [MediaFixedReservation], { name: 'mediaFixedReservations' })
  findAll() {
    return this.mediaFixedReservationsService.findAll();
  }

  @Query(() => MediaFixedReservation, { name: 'mediaFixedReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaFixedReservationsService.findOne(id);
  }

  @Mutation(() => MediaFixedReservation)
  updateMediaFixedReservation(@Args('updateMediaFixedReservationInput') updateMediaFixedReservationInput: UpdateMediaFixedReservationInput) {
    return this.mediaFixedReservationsService.update(updateMediaFixedReservationInput.id, updateMediaFixedReservationInput);
  }

  @Mutation(() => MediaFixedReservation)
  removeMediaFixedReservation(@Args('id', { type: () => Int }) id: number) {
    return this.mediaFixedReservationsService.remove(id);
  }
}
