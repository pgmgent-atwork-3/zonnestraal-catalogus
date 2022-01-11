import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateBuildingsFixedReservationsExceptionInput {
  @IsInt()
  @Field(() => Int)
  buildings_fixed_reservations_id: number;

  // @Field({ nullable: true })
  // created_on: Date;

  @Field({ nullable: true })
  date: Date;
}
