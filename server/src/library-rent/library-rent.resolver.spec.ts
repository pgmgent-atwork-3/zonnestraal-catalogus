import { Test, TestingModule } from '@nestjs/testing';
import { LibraryRentResolver } from './library-rent.resolver';
import { LibraryRentService } from './library-rent.service';

describe('LibraryRentResolver', () => {
  let resolver: LibraryRentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryRentResolver, LibraryRentService],
    }).compile();

    resolver = module.get<LibraryRentResolver>(LibraryRentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
