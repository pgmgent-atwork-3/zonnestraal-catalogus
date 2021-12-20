import { CreateTransportFixedReservationInput } from './create-transport-fixed-reservation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTransportFixedReservationInput extends PartialType(
  CreateTransportFixedReservationInput,
) {
  @Field(() => Int)
  id: number;
}
