import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLibraryRentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
