import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransportFixedReservationsExceptionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
