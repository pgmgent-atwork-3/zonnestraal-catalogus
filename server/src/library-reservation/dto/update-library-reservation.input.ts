import { CreateLibraryReservationInput } from './create-library-reservation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLibraryReservationInput extends PartialType(
  CreateLibraryReservationInput,
) {
  @Field(() => Int)
  id: number;
}
