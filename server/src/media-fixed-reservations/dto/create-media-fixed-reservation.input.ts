import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaFixedReservationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
