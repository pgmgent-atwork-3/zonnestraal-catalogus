import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaFixedReservationsService } from './media-fixed-reservations.service';
import { MediaFixedReservations } from './entities/media-fixed-reservations.entity';
import { CreateMediaFixedReservationsInput } from './dto/create-media-fixed-reservations.input';
import { UpdateMediaFixedReservationsInput } from './dto/update-media-fixed-reservations.input';

@Resolver(() => MediaFixedReservations)
export class MediaFixedReservationsResolver {
  constructor(
    private readonly mediaFixedReservationsService: MediaFixedReservationsService,
  ) {}

  // @Mutation(() => MediaFixedReservations)
  // createMediaFixedReservation(@Args('createMediaFixedReservationsInput') createMediaFixedReservationsInput: CreateMediaFixedReservationInput) {
  //   return this.mediaFixedReservationsService.create(createMediaFixedReservationsInput);
  // }

  // @Query(() => [MediaFixedReservations], { name: 'mediaFixedReservations' })
  // findAll() {
  //   return this.mediaFixedReservationsService.findAll();
  // }

  // @Query(() => MediaFixedReservations, { name: 'mediaFixedReservation' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaFixedReservationsService.findOne(id);
  // }

  // @Mutation(() => MediaFixedReservations)
  // updateMediaFixedReservation(@Args('updateMediaFixedReservationsInput') updateMediaFixedReservationsInput: UpdateMediaFixedReservationInput) {
  //   return this.mediaFixedReservationsService.update(updateMediaFixedReservationsInput.id, updateMediaFixedReservationsInput);
  // }

  // @Mutation(() => MediaFixedReservations)
  // removeMediaFixedReservation(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaFixedReservationsService.remove(id);
  // }
}
