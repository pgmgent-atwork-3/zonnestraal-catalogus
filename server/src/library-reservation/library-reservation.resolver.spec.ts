import { Test, TestingModule } from '@nestjs/testing';
import { LibraryReservationResolver } from './library-reservation.resolver';
import { LibraryReservationService } from './library-reservation.service';

describe('LibraryReservationResolver', () => {
  let resolver: LibraryReservationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryReservationResolver, LibraryReservationService],
    }).compile();

    resolver = module.get<LibraryReservationResolver>(
      LibraryReservationResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
