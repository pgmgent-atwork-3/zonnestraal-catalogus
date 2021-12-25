import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfilesGroupsRightInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
