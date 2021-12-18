import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaFixedReservationsExceptionsService } from './media-fixed-reservations-exceptions.service';
import { MediaFixedReservationsException } from './entities/media-fixed-reservations-exception.entity';
import { CreateMediaFixedReservationsExceptionInput } from './dto/create-media-fixed-reservations-exception.input';
import { UpdateMediaFixedReservationsExceptionInput } from './dto/update-media-fixed-reservations-exception.input';

@Resolver(() => MediaFixedReservationsException)
export class MediaFixedReservationsExceptionsResolver {
  constructor(private readonly mediaFixedReservationsExceptionsService: MediaFixedReservationsExceptionsService) {}

  @Mutation(() => MediaFixedReservationsException)
  createMediaFixedReservationsException(@Args('createMediaFixedReservationsExceptionInput') createMediaFixedReservationsExceptionInput: CreateMediaFixedReservationsExceptionInput) {
    return this.mediaFixedReservationsExceptionsService.create(createMediaFixedReservationsExceptionInput);
  }

  @Query(() => [MediaFixedReservationsException], { name: 'mediaFixedReservationsExceptions' })
  findAll() {
    return this.mediaFixedReservationsExceptionsService.findAll();
  }

  @Query(() => MediaFixedReservationsException, { name: 'mediaFixedReservationsException' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaFixedReservationsExceptionsService.findOne(id);
  }

  @Mutation(() => MediaFixedReservationsException)
  updateMediaFixedReservationsException(@Args('updateMediaFixedReservationsExceptionInput') updateMediaFixedReservationsExceptionInput: UpdateMediaFixedReservationsExceptionInput) {
    return this.mediaFixedReservationsExceptionsService.update(updateMediaFixedReservationsExceptionInput.id, updateMediaFixedReservationsExceptionInput);
  }

  @Mutation(() => MediaFixedReservationsException)
  removeMediaFixedReservationsException(@Args('id', { type: () => Int }) id: number) {
    return this.mediaFixedReservationsExceptionsService.remove(id);
  }
}
