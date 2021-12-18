import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMediaFixedReservationsInput {
  @Field(() => Int)
  id: number;
}
