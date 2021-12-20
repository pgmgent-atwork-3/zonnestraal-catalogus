import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesGroupsResolver } from './profiles-groups.resolver';
import { ProfilesGroupsService } from './profiles-groups.service';

describe('ProfilesGroupsResolver', () => {
  let resolver: ProfilesGroupsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesGroupsResolver, ProfilesGroupsService],
    }).compile();

    resolver = module.get<ProfilesGroupsResolver>(ProfilesGroupsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
