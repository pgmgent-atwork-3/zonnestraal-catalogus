import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfilesGroupInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
