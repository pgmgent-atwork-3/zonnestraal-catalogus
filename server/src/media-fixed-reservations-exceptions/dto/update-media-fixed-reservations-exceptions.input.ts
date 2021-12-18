import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMediaFixedReservationsExceptionsInput {
  @Field(() => Int)
  id: number;
}
