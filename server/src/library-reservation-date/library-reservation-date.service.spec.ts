import { Test, TestingModule } from '@nestjs/testing';
import { LibraryReservationDateService } from './library-reservation-date.service';

describe('LibraryReservationDateService', () => {
  let service: LibraryReservationDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryReservationDateService],
    }).compile();

    service = module.get<LibraryReservationDateService>(
      LibraryReservationDateService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
