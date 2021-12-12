import { Test, TestingModule } from '@nestjs/testing';
import { MediaRentResolver } from './media-rent.resolver';
import { MediaRentService } from './media-rent.service';

describe('MediaRentResolver', () => {
  let resolver: MediaRentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaRentResolver, MediaRentService],
    }).compile();

    resolver = module.get<MediaRentResolver>(MediaRentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
