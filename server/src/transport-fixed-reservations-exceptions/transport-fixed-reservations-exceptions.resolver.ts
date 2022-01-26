import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportFixedReservationsExceptionsService } from './transport-fixed-reservations-exceptions.service';
import { TransportFixedReservationsExceptions } from './entities/transport-fixed-reservations-exceptions.entity';
import { CreateTransportFixedReservationsExceptionInput } from './dto/create-transport-fixed-reservations-exception.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';
import { DeleteTransportFixedReservationsExceptionsInput } from './dto/delete-transport-fixed-reservations-exception.input';

@Resolver(() => TransportFixedReservationsExceptions)
export class TransportFixedReservationsExceptionsResolver {
  constructor(
    private readonly transportFixedReservationsExceptionsService: TransportFixedReservationsExceptionsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [TransportFixedReservationsExceptions])
  createTransportFixedReservationsException(
    @Args('createTransportFixedReservationsExceptionInput')
    createTransportFixedReservationsExceptionInput: CreateTransportFixedReservationsExceptionInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.transportFixedReservationsExceptionsService.create(
        createTransportFixedReservationsExceptionInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @Query(() => TransportFixedReservationsExceptions, {
    name: 'transportFixedReservationsException',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportFixedReservationsExceptionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [TransportFixedReservationsExceptions])
  deleteTransportFixedReservationsException(
    @Args('deleteTransportFixedReservationsExceptionsInput')
    deleteTransportFixedReservationsExceptionsInput: DeleteTransportFixedReservationsExceptionsInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.transportFixedReservationsExceptionsService.delete(
        deleteTransportFixedReservationsExceptionsInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }
}
