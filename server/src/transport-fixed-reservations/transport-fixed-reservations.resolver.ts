import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportFixedReservationsService } from './transport-fixed-reservations.service';
import { TransportFixedReservations } from './entities/transport-fixed-reservations.entity';
import { CreateTransportFixedReservationInput } from './dto/create-transport-fixed-reservation.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => TransportFixedReservations)
export class TransportFixedReservationsResolver {
  constructor(
    private readonly transportFixedReservationsService: TransportFixedReservationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TransportFixedReservations, {
    name: 'createTransportFixedReservation',
  })
  createTransportFixedReservation(
    @Args('createTransportFixedReservationInput')
    createTransportFixedReservationInput: CreateTransportFixedReservationInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.transportFixedReservationsService.create(
        user.id,
        createTransportFixedReservationInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @Query(() => [TransportFixedReservations], {
    name: 'getAlltransportFixedReservations',
  })
  findAll() {
    return this.transportFixedReservationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [TransportFixedReservations], {
    name: 'getAllCarsFixedReservationForAdmin',
  })
  findAllForAdmin(@GetUser() user) {
    if (user.isAdmin === true) {
      return this.transportFixedReservationsService.findAllForAdmin();
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @Query(() => TransportFixedReservations, {
    name: 'getTransportFixedReservationById',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportFixedReservationsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TransportFixedReservations)
  removeTransportFixedReservation(
    @Args('id', { type: () => Int }) id: number,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.transportFixedReservationsService.remove(id);
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }
}
