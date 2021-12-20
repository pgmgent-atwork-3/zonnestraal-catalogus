import { Test, TestingModule } from '@nestjs/testing';
import { LibraryRentService } from './library-rent.service';

describe('LibraryRentService', () => {
  let service: LibraryRentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryRentService],
    }).compile();

    service = module.get<LibraryRentService>(LibraryRentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
