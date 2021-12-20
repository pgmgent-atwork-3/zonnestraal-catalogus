import { CreateBuildingsFixedReservationsExceptionInput } from './create-buildings-fixed-reservations-exception.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBuildingsFixedReservationsExceptionInput extends PartialType(
  CreateBuildingsFixedReservationsExceptionInput,
) {
  @Field(() => Int)
  id: number;
}
