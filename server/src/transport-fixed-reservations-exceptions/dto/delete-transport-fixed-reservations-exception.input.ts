import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteTransportFixedReservationsExceptionsInput {
  @Field(() => [Number])
  transportFixedReservationExceptionsIds: number[];
}
