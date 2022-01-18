import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { MediaFixedReservationsExceptionsService } from './media-fixed-reservations-exceptions.service';
import { MediaFixedReservationsExceptions } from './entities/media-fixed-reservations-exceptions.entity';
import { CreateMediaFixedReservationsExceptionsInput } from './dto/create-media-fixed-reservations-exceptions.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';
import { DeleteMediaFixedReservationExceptionsInput } from './dto/delete-media-fixed-reservations-exceptions.input';

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

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [MediaFixedReservationsExceptions])
  deleteMediaFixedReservationsException(
    @Args('deleteMediaFixedReservationExceptionsInput')
    deleteMediaFixedReservationExceptionsInput: DeleteMediaFixedReservationExceptionsInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.mediaFixedReservationsExceptionsService.delete(
        deleteMediaFixedReservationExceptionsInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }
}
