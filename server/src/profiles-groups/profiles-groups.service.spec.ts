import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesGroupsService } from './profiles-groups.service';

describe('ProfilesGroupsService', () => {
  let service: ProfilesGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesGroupsService],
    }).compile();

    service = module.get<ProfilesGroupsService>(ProfilesGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
