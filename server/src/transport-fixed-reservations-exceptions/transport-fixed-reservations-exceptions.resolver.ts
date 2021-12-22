import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportFixedReservationsExceptionsService } from './transport-fixed-reservations-exceptions.service';
import { TransportFixedReservationsExceptions } from './entities/transport-fixed-reservations-exceptions.entity';
import { CreateTransportFixedReservationsExceptionInput } from './dto/create-transport-fixed-reservations-exception.input';
import { UpdateTransportFixedReservationsExceptionInput } from './dto/update-transport-fixed-reservations-exception.input';

@Resolver(() => TransportFixedReservationsExceptions)
export class TransportFixedReservationsExceptionsResolver {
  constructor(
    private readonly transportFixedReservationsExceptionsService: TransportFixedReservationsExceptionsService,
  ) {}

  @Mutation(() => TransportFixedReservationsExceptions)
  createTransportFixedReservationsException(
    @Args('createTransportFixedReservationsExceptionInput')
    createTransportFixedReservationsExceptionInput: CreateTransportFixedReservationsExceptionInput,
  ) {
    return this.transportFixedReservationsExceptionsService.create(
      createTransportFixedReservationsExceptionInput,
    );
  }

  @Query(() => [TransportFixedReservationsExceptions], {
    name: 'transportFixedReservationsExceptions',
  })
  findAll() {
    return this.transportFixedReservationsExceptionsService.findAll();
  }

  @Query(() => TransportFixedReservationsExceptions, {
    name: 'transportFixedReservationsException',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportFixedReservationsExceptionsService.findOne(id);
  }

  @Mutation(() => TransportFixedReservationsExceptions)
  updateTransportFixedReservationsException(
    @Args('updateTransportFixedReservationsExceptionInput')
    updateTransportFixedReservationsExceptionInput: UpdateTransportFixedReservationsExceptionInput,
  ) {
    return this.transportFixedReservationsExceptionsService.update(
      updateTransportFixedReservationsExceptionInput.id,
      updateTransportFixedReservationsExceptionInput,
    );
  }

  @Mutation(() => TransportFixedReservationsExceptions)
  removeTransportFixedReservationsException(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.transportFixedReservationsExceptionsService.remove(id);
  }
}