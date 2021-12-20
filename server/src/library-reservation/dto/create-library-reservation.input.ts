import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLibraryReservationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
