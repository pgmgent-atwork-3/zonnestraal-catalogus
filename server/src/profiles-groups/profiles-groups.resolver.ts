import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfilesGroupsService } from './profiles-groups.service';
import { ProfilesGroups } from './entities/profiles-groups.entity';
import { CreateProfilesGroupInput } from './dto/create-profiles-group.input';
import { UpdateProfilesGroupInput } from './dto/update-profiles-group.input';

@Resolver(() => ProfilesGroups)
export class ProfilesGroupsResolver {
  constructor(private readonly profilesGroupsService: ProfilesGroupsService) {}

  // @Mutation(() => ProfilesGroups)
  // createProfilesGroup(@Args('createProfilesGroupInput') createProfilesGroupInput: CreateProfilesGroupInput) {
  //   return this.profilesGroupsService.create(createProfilesGroupInput);
  // }

  // @Query(() => [ProfilesGroups], { name: 'profilesGroups' })
  // findAll() {
  //   return this.profilesGroupsService.findAll();
  // }

  // @Query(() => ProfilesGroups, { name: 'profilesGroup' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.profilesGroupsService.findOne(id);
  // }

  // @Mutation(() => ProfilesGroups)
  // updateProfilesGroup(@Args('updateProfilesGroupInput') updateProfilesGroupInput: UpdateProfilesGroupInput) {
  //   return this.profilesGroupsService.update(updateProfilesGroupInput.id, updateProfilesGroupInput);
  // }

  // @Mutation(() => ProfilesGroup)
  // removeProfilesGroup(@Args('id', { type: () => Int }) id: number) {
  //   return this.profilesGroupsService.remove(id);
  //}
}
