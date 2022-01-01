import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLibraryReservationDateInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
