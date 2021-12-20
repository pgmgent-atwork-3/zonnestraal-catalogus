import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaFixedReservationsExceptionsInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
