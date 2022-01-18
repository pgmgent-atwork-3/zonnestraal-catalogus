import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaFixedReservationsExceptionsService } from './media-fixed-reservations-exceptions.service';
import { MediaFixedReservationsExceptions } from './entities/media-fixed-reservations-exceptions.entity';
import { CreateMediaFixedReservationsExceptionsInput } from './dto/create-media-fixed-reservations-exceptions.input';
import { UpdateMediaFixedReservationsExceptionsInput } from './dto/update-media-fixed-reservations-exceptions.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => MediaFixedReservationsExceptions)
export class MediaFixedReservationsExceptionsResolver {
  constructor(
    private readonly mediaFixedReservationsExceptionsService: MediaFixedReservationsExceptionsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [MediaFixedReservationsExceptions])
  createMediaFixedReservationsException(
    @Args('createMediaFixedReservationExceptionsInput')
    createMediaFixedReservationsExceptionsInput: CreateMediaFixedReservationsExceptionsInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.mediaFixedReservationsExceptionsService.create(
        createMediaFixedReservationsExceptionsInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  // @Query(() => [MediaFixedReservationsException], { name: 'mediaFixedReservationsExceptions' })
  // findAll() {
  //   return this.mediaFixedReservationsExceptionsService.findAll();
  // }

  // @Query(() => MediaFixedReservationsException, { name: 'mediaFixedReservationsException' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaFixedReservationsExceptionsService.findOne(id);
  // }

  // @Mutation(() => MediaFixedReservationsException)
  // updateMediaFixedReservationsException(@Args('updateMediaFixedReservationsExceptionInput') updateMediaFixedReservationsExceptionInput: UpdateMediaFixedReservationsExceptionInput) {
  //   return this.mediaFixedReservationsExceptionsService.update(updateMediaFixedReservationsExceptionInput.id, updateMediaFixedReservationsExceptionInput);
  // }

  // @Mutation(() => MediaFixedReservationsException)
  // removeMediaFixedReservationsException(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaFixedReservationsExceptionsService.remove(id);
  // }
}
