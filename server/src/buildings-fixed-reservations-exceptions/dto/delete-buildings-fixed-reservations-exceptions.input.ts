import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeleteBuildingsFixedReservationExceptionsInput {
  @Field(() => [Number])
  buildingsFixedReservationExceptionsIds: number[];
}
