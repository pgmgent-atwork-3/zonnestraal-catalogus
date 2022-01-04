import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLibraryReservationDateInput {
  @Field()
  from_date: Date;

  @Field()
  till_date: Date;
}
