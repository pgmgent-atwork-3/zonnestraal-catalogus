import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportReservationsService } from './transport-reservations.service';
import { TransportReservation } from './entities/transport-reservation.entity';
import { CreateTransportReservationInput } from './dto/create-transport-reservation.input';
import { UpdateTransportReservationInput } from './dto/update-transport-reservation.input';

@Resolver(() => TransportReservation)
export class TransportReservationsResolver {
  constructor(
    private readonly transportReservationsService: TransportReservationsService,
  ) {}

  @Mutation(() => TransportReservation)
  createTransportReservation(
    @Args('createTransportReservationInput')
    createTransportReservationInput: CreateTransportReservationInput,
  ) {
    return this.transportReservationsService.create(
      createTransportReservationInput,
    );
  }

  @Query(() => [TransportReservation], { name: 'transportReservations' })
  findAll() {
    return this.transportReservationsService.findAll();
  }

  @Query(() => TransportReservation, { name: 'transportReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportReservationsService.findOne(id);
  }

  @Mutation(() => TransportReservation)
  updateTransportReservation(
    @Args('updateTransportReservationInput')
    updateTransportReservationInput: UpdateTransportReservationInput,
  ) {
    return this.transportReservationsService.update(
      updateTransportReservationInput.id,
      updateTransportReservationInput,
    );
  }

  @Mutation(() => TransportReservation)
  removeTransportReservation(@Args('id', { type: () => Int }) id: number) {
    return this.transportReservationsService.remove(id);
  }
}
