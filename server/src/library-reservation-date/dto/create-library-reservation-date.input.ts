import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLibraryReservationDateInput {
  @Field()
  from: Date;

  @Field()
  till: Date;
}
