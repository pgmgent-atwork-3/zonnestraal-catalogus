import { Test, TestingModule } from '@nestjs/testing';
import { LibraryReservationService } from './library-reservation.service';

describe('LibraryReservationService', () => {
  let service: LibraryReservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryReservationService],
    }).compile();

    service = module.get<LibraryReservationService>(LibraryReservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
