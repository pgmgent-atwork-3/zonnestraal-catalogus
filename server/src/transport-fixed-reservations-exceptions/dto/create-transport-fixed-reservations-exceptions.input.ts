import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransportFixedReservationsExceptionsInput {
  @Field(() => Number)
  transport_fixed_reservations_id: number;

  @Field({ nullable: true })
  date: string;
}
