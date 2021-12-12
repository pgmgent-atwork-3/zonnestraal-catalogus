import { Test, TestingModule } from '@nestjs/testing';
import { LibraryTypesService } from './library-types.service';

describe('LibraryTypesService', () => {
  let service: LibraryTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryTypesService],
    }).compile();

    service = module.get<LibraryTypesService>(LibraryTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
