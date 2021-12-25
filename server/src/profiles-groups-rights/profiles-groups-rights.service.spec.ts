import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesGroupsRightsService } from './profiles-groups-rights.service';

describe('ProfilesGroupsRightsService', () => {
  let service: ProfilesGroupsRightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesGroupsRightsService],
    }).compile();

    service = module.get<ProfilesGroupsRightsService>(
      ProfilesGroupsRightsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
