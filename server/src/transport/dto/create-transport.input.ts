import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransportInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
