import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaFixedReservationsInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
