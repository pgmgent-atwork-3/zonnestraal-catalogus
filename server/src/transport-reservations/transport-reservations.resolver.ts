import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportReservationsService } from './transport-reservations.service';
import { TransportReservations } from './entities/transport-reservations.entity';
import { CreateTransportReservationInput } from './dto/create-transport-reservation.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => TransportReservations)
export class TransportReservationsResolver {
  constructor(
    private readonly transportReservationsService: TransportReservationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TransportReservations, { name: 'createCarReservation' })
  createTransportReservation(
    @Args('createTransportReservationInput')
    createTransportReservationInput: CreateTransportReservationInput,
    @GetUser() user,
  ) {
    return this.transportReservationsService.create(
      user.id,
      createTransportReservationInput,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [TransportReservations], {
    name: 'getAllTransportReservationForAdmin',
  })
  findAllForAdmin(@GetUser() user) {
    if (user.isAdmin === true) {
      return this.transportReservationsService.findAllForAdmin();
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [TransportReservations], {
    name: 'GetAlltransportReservationsByUser',
  })
  findAll(@GetUser() user) {
    return this.transportReservationsService.findAll(user.id);
  }

  @Query(() => TransportReservations, { name: 'transportReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportReservationsService.findOne(id);
  }

  @Mutation(() => TransportReservations)
  removeTransportReservation(@Args('id', { type: () => Int }) id: number) {
    return this.transportReservationsService.remove(id);
  }
}
