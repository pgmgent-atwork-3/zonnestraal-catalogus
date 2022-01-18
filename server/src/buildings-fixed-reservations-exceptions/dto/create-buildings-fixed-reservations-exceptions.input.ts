import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateBuildingsFixedReservationExceptionsInput {
  //@IsInt()
  @Field(() => Int)
  buildings_fixed_reservations_id: number;

  //@IsString()
  @Field(() => [String], { nullable: true })
  dates: string[];
}
