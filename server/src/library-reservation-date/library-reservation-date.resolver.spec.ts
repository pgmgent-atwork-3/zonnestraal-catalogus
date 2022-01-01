import { Test, TestingModule } from '@nestjs/testing';
import { LibraryReservationDateResolver } from './library-reservation-date.resolver';
import { LibraryReservationDateService } from './library-reservation-date.service';

describe('LibraryReservationDateResolver', () => {
  let resolver: LibraryReservationDateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LibraryReservationDateResolver,
        LibraryReservationDateService,
      ],
    }).compile();

    resolver = module.get<LibraryReservationDateResolver>(
      LibraryReservationDateResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
