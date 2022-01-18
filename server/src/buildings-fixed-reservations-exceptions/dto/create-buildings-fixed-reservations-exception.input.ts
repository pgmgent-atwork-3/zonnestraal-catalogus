import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateBuildingsFixedReservationsExceptionInput {
  @Field(() => Number)
  buildings_fixed_reservations_id: number;

  // @Field({ nullable: true })
  // created_on: Date;

  @Field({ nullable: true })
  date: string;
}
