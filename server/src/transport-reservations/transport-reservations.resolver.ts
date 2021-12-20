import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportReservationsService } from './transport-reservations.service';
import { TransportReservations } from './entities/transport-reservations.entity';
import { CreateTransportReservationInput } from './dto/create-transport-reservation.input';
import { UpdateTransportReservationInput } from './dto/update-transport-reservation.input';

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

  @Query(() => [TransportReservations], { name: 'transportReservations' })
  findAll() {
    return this.transportReservationsService.findAll();
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
