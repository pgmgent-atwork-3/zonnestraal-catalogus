import { CreateProfilesGroupsRightInput } from './create-profiles-groups-right.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProfilesGroupsRightInput extends PartialType(
  CreateProfilesGroupsRightInput,
) {
  @Field(() => Int)
  id: number;
}
