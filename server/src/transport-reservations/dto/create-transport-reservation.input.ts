import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransportReservationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
