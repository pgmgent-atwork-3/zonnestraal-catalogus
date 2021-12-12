import { Test, TestingModule } from '@nestjs/testing';
import { LibraryTypesResolver } from './library-types.resolver';
import { LibraryTypesService } from './library-types.service';

describe('LibraryTypesResolver', () => {
  let resolver: LibraryTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryTypesResolver, LibraryTypesService],
    }).compile();

    resolver = module.get<LibraryTypesResolver>(LibraryTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
