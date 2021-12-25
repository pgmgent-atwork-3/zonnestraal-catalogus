import { CreateTransportFixedReservationsExceptionInput } from './create-transport-fixed-reservations-exception.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTransportFixedReservationsExceptionInput extends PartialType(
  CreateTransportFixedReservationsExceptionInput,
) {
  @Field(() => Int)
  id: number;
}
