import { Test, TestingModule } from '@nestjs/testing';
import { MediaFixedReservationsResolver } from './media-fixed-reservations.resolver';
import { MediaFixedReservationsService } from './media-fixed-reservations.service';

describe('MediaFixedReservationsResolver', () => {
  let resolver: MediaFixedReservationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaFixedReservationsResolver,
        MediaFixedReservationsService,
      ],
    }).compile();

    resolver = module.get<MediaFixedReservationsResolver>(
      MediaFixedReservationsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
