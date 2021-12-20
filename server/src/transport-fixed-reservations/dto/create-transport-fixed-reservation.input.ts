import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransportFixedReservationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
