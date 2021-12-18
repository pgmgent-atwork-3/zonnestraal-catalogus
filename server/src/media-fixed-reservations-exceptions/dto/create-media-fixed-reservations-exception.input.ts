import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaFixedReservationsExceptionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
