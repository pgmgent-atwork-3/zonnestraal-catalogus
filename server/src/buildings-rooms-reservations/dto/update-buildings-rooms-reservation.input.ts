import { CreateBuildingsRoomsReservationInput } from './create-buildings-rooms-reservation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBuildingsRoomsReservationInput extends PartialType(
  CreateBuildingsRoomsReservationInput,
) {
  @Field(() => Int)
  id: number;
}
