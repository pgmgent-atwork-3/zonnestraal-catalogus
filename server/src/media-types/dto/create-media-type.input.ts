import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
