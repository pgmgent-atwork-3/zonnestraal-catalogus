import { CreateMediaFixedReservationsExceptionInput } from './create-media-fixed-reservations-exception.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaFixedReservationsExceptionInput extends PartialType(CreateMediaFixedReservationsExceptionInput) {
  @Field(() => Int)
  id: number;
}
