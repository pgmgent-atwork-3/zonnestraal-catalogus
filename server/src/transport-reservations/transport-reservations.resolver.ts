import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportReservationsService } from './transport-reservations.service';
import { TransportReservations } from './entities/transport-reservations.entity';
import { CreateTransportReservationInput } from './dto/create-transport-reservation.input';
import { UpdateTransportReservationInput } from './dto/update-transport-reservation.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => TransportReservations)
export class TransportReservationsResolver {
  constructor(
    private readonly transportReservationsService: TransportReservationsService,
  ) {}

  @Mutation(() => TransportReservations)
  createTransportReservation(
    @Args('createTransportReservationInput')
    createTransportReservationInput: CreateTransportReservationInput,
  ) {
    return this.transportReservationsService.create(
      createTransportReservationInput,
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
  updateTransportReservation(
    @Args('updateTransportReservationInput')
    updateTransportReservationInput: UpdateTransportReservationInput,
  ) {
    return this.transportReservationsService.update(
      updateTransportReservationInput.id,
      updateTransportReservationInput,
    );
  }

  @Mutation(() => TransportReservations)
  removeTransportReservation(@Args('id', { type: () => Int }) id: number) {
    return this.transportReservationsService.remove(id);
  }
}
