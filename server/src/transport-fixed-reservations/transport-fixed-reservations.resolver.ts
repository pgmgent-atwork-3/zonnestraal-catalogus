import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportFixedReservationsService } from './transport-fixed-reservations.service';
import { TransportFixedReservations } from './entities/transport-fixed-reservations.entity';
import { CreateTransportFixedReservationInput } from './dto/create-transport-fixed-reservation.input';
import { UpdateTransportFixedReservationInput } from './dto/update-transport-fixed-reservation.input';

@Resolver(() => TransportFixedReservations)
export class TransportFixedReservationsResolver {
  constructor(private readonly transportFixedReservationsService: TransportFixedReservationsService) {}

  @Mutation(() => TransportFixedReservations)
  createTransportFixedReservation(@Args('createTransportFixedReservationInput') createTransportFixedReservationInput: CreateTransportFixedReservationInput) {
    return this.transportFixedReservationsService.create(createTransportFixedReservationInput);
  }

  @Query(() => [TransportFixedReservations], { name: 'transportFixedReservations' })
  findAll() {
    return this.transportFixedReservationsService.findAll();
  }

  @Query(() => TransportFixedReservations, { name: 'transportFixedReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportFixedReservationsService.findOne(id);
  }

  @Mutation(() => TransportFixedReservations)
  updateTransportFixedReservation(@Args('updateTransportFixedReservationInput') updateTransportFixedReservationInput: UpdateTransportFixedReservationInput) {
    return this.transportFixedReservationsService.update(updateTransportFixedReservationInput.id, updateTransportFixedReservationInput);
  }

  @Mutation(() => TransportFixedReservations)
  removeTransportFixedReservation(@Args('id', { type: () => Int }) id: number) {
    return this.transportFixedReservationsService.remove(id);
  }
}
