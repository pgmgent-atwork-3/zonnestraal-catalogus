import { CreateMediaFixedReservationInput } from './create-media-fixed-reservation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaFixedReservationInput extends PartialType(CreateMediaFixedReservationInput) {
  @Field(() => Int)
  id: number;
}
