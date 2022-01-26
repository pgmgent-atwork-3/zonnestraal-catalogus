import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBuildingsFixedReservationsExceptionInput {
  @Field(() => Number)
  buildings_fixed_reservations_id: number;

  @Field({ nullable: true })
  date: string;
}
