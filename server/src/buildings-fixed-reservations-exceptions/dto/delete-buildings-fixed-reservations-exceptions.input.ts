import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteBuildingsFixedReservationExceptionsInput {
  @Field(() => [Number])
  buildingsFixedReservationExceptionsIds: number[];
}
