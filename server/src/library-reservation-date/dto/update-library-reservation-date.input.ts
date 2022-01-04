import { CreateLibraryReservationDateInput } from './create-library-reservation-date.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLibraryReservationDateInput extends PartialType(
  CreateLibraryReservationDateInput,
) {
  @Field(() => Int)
  id: number;
}
