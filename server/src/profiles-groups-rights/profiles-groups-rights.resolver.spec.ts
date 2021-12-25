import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesGroupsRightsResolver } from './profiles-groups-rights.resolver';
import { ProfilesGroupsRightsService } from './profiles-groups-rights.service';

describe('ProfilesGroupsRightsResolver', () => {
  let resolver: ProfilesGroupsRightsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesGroupsRightsResolver, ProfilesGroupsRightsService],
    }).compile();

    resolver = module.get<ProfilesGroupsRightsResolver>(
      ProfilesGroupsRightsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
