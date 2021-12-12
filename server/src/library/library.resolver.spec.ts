import { Test, TestingModule } from '@nestjs/testing';
import { LibraryResolver } from './library.resolver';
import { LibraryService } from './library.service';

describe('LibraryResolver', () => {
  let resolver: LibraryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryResolver, LibraryService],
    }).compile();

    resolver = module.get<LibraryResolver>(LibraryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
