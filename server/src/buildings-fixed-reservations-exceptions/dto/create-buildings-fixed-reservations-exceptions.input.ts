import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBuildingsFixedReservationExceptionsInput {
  @Field(() => Int)
  buildings_fixed_reservations_id: number;

  @Field(() => [String], { nullable: true })
  dates: string[];
}
