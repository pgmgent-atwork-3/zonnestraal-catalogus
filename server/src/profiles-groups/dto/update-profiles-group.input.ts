import { CreateProfilesGroupInput } from './create-profiles-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProfilesGroupInput extends PartialType(
  CreateProfilesGroupInput,
) {
  @Field(() => Int)
  id: number;
}
