import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProfilesGroupsRightsService } from './profiles-groups-rights.service';
import { ProfilesGroupsRights } from './entities/profiles-groups-rights.entity';

@Resolver(() => ProfilesGroupsRights)
export class ProfilesGroupsRightsResolver {
  constructor(
    private readonly profilesGroupsRightsService: ProfilesGroupsRightsService,
  ) {}

  @Query(() => ProfilesGroupsRights, { name: 'profilesGroupsRight' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profilesGroupsRightsService.findOne(id);
  }
}
