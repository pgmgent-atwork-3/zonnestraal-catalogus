import { Test, TestingModule } from '@nestjs/testing';
import { MediaTypesService } from './media-types.service';

describe('MediaTypesService', () => {
  let service: MediaTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaTypesService],
    }).compile();

    service = module.get<MediaTypesService>(MediaTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
