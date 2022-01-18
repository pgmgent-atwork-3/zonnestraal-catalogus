import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteMediaFixedReservationExceptionsInput {
  @Field(() => [Number])
  mediaFixedReservationExceptionsIds: number[];
}
