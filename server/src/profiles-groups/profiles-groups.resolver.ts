import { Resolver } from '@nestjs/graphql';
import { ProfilesGroupsService } from './profiles-groups.service';
import { ProfilesGroups } from './entities/profiles-groups.entity';

@Resolver(() => ProfilesGroups)
export class ProfilesGroupsResolver {
  constructor(private readonly profilesGroupsService: ProfilesGroupsService) {}
}
