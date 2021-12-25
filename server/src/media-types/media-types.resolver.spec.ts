import { Test, TestingModule } from '@nestjs/testing';
import { MediaTypesResolver } from './media-types.resolver';
import { MediaTypesService } from './media-types.service';

describe('MediaTypesResolver', () => {
  let resolver: MediaTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaTypesResolver, MediaTypesService],
    }).compile();

    resolver = module.get<MediaTypesResolver>(MediaTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
