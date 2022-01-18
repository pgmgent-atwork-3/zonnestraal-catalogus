import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaFixedReservationsService } from './media-fixed-reservations.service';
import { MediaFixedReservations } from './entities/media-fixed-reservations.entity';
import { CreateMediaFixedReservationsInput } from './dto/create-media-fixed-reservations.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => MediaFixedReservations)
export class MediaFixedReservationsResolver {
  constructor(
    private readonly mediaFixedReservationsService: MediaFixedReservationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MediaFixedReservations, {
    name: 'createMediaFixedReservation',
  })
  createMediaFixedReservation(
    @Args('createMediaFixedReservationsInput')
    createMediaFixedReservationsInput: CreateMediaFixedReservationsInput,
    @GetUser() user,
  ) {
    if (user.isAdmin) {
      return this.mediaFixedReservationsService.create(
        user.id,
        createMediaFixedReservationsInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @Query(() => MediaFixedReservations, { name: 'getOnemediaFixedReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaFixedReservationsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [MediaFixedReservations], {
    name: 'getAllMediaFixedReservationForAdmin',
  })
  findAllForAdmin(@GetUser() user) {
    if (user.isAdmin === true) {
      return this.mediaFixedReservationsService.findAllForAdmin();
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MediaFixedReservations)
  removeMediaFixedReservation(
    @Args('id', { type: () => Int }) id: number,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.mediaFixedReservationsService.remove(id);
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }
}
