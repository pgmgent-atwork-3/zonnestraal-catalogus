import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaFixedReservationsExceptionsInput {
  @Field(() => Int)
  media_fixed_reservations_id: number;

  @Field(() => [String], { nullable: true })
  dates: string[];
}
