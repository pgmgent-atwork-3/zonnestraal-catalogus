import { CreateTransportReservationInput } from './create-transport-reservation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTransportReservationInput extends PartialType(
  CreateTransportReservationInput,
) {
  @Field(() => Int)
  id: number;
}
