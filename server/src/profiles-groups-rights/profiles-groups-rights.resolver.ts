import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfilesGroupsRightsService } from './profiles-groups-rights.service';
import { ProfilesGroupsRights } from './entities/profiles-groups-rights.entity';
import { CreateProfilesGroupsRightInput } from './dto/create-profiles-groups-right.input';
import { UpdateProfilesGroupsRightInput } from './dto/update-profiles-groups-right.input';

@Resolver(() => ProfilesGroupsRights)
export class ProfilesGroupsRightsResolver {
  constructor(
    private readonly profilesGroupsRightsService: ProfilesGroupsRightsService,
  ) {}

  // @Mutation(() => ProfilesGroupsRight)
  // createProfilesGroupsRight(@Args('createProfilesGroupsRightInput') createProfilesGroupsRightInput: CreateProfilesGroupsRightInput) {
  //   return this.profilesGroupsRightsService.create(createProfilesGroupsRightInput);
  // }

  // @Query(() => [ProfilesGroupsRights], { name: 'profilesGroupsRights' })
  // findAll() {
  //   return this.profilesGroupsRightsService.findAll();
  // }

  // @Query(() => ProfilesGroupsRights, { name: 'profilesGroupsRight' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.profilesGroupsRightsService.findOne(id);
  // }

  // @Mutation(() => ProfilesGroupsRights)
  // updateProfilesGroupsRight(@Args('updateProfilesGroupsRightInput') updateProfilesGroupsRightInput: UpdateProfilesGroupsRightInput) {
  //   return this.profilesGroupsRightsService.update(updateProfilesGroupsRightInput.id, updateProfilesGroupsRightInput);
  // }

  // @Mutation(() => ProfilesGroupsRights)
  // removeProfilesGroupsRight(@Args('id', { type: () => Int }) id: number) {
  //   return this.profilesGroupsRightsService.remove(id);
  // }
}
