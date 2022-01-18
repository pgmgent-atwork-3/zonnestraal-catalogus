import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTransportFixedReservationsExceptionInput {
  @Field(() => Int)
  transport_fixed_reservations_id: number;

  @Field(() => [String], { nullable: true })
  dates: string[];
}
