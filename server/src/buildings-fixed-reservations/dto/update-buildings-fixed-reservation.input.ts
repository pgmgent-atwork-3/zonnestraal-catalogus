import { CreateBuildingsFixedReservationInput } from './create-buildings-fixed-reservation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBuildingsFixedReservationInput extends PartialType(
  CreateBuildingsFixedReservationInput,
) {
  @Field(() => Int)
  id: number;
}
