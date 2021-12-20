import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportFixedReservationsExceptionsService } from './transport-fixed-reservations-exceptions.service';
import { TransportFixedReservationsException } from './entities/transport-fixed-reservations-exception.entity';
import { CreateTransportFixedReservationsExceptionInput } from './dto/create-transport-fixed-reservations-exception.input';
import { UpdateTransportFixedReservationsExceptionInput } from './dto/update-transport-fixed-reservations-exception.input';

@Resolver(() => TransportFixedReservationsException)
export class TransportFixedReservationsExceptionsResolver {
  constructor(private readonly transportFixedReservationsExceptionsService: TransportFixedReservationsExceptionsService) {}

  @Mutation(() => TransportFixedReservationsException)
  createTransportFixedReservationsException(@Args('createTransportFixedReservationsExceptionInput') createTransportFixedReservationsExceptionInput: CreateTransportFixedReservationsExceptionInput) {
    return this.transportFixedReservationsExceptionsService.create(createTransportFixedReservationsExceptionInput);
  }

  @Query(() => [TransportFixedReservationsException], { name: 'transportFixedReservationsExceptions' })
  findAll() {
    return this.transportFixedReservationsExceptionsService.findAll();
  }

  @Query(() => TransportFixedReservationsException, { name: 'transportFixedReservationsException' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportFixedReservationsExceptionsService.findOne(id);
  }

  @Mutation(() => TransportFixedReservationsException)
  updateTransportFixedReservationsException(@Args('updateTransportFixedReservationsExceptionInput') updateTransportFixedReservationsExceptionInput: UpdateTransportFixedReservationsExceptionInput) {
    return this.transportFixedReservationsExceptionsService.update(updateTransportFixedReservationsExceptionInput.id, updateTransportFixedReservationsExceptionInput);
  }

  @Mutation(() => TransportFixedReservationsException)
  removeTransportFixedReservationsException(@Args('id', { type: () => Int }) id: number) {
    return this.transportFixedReservationsExceptionsService.remove(id);
  }
}
