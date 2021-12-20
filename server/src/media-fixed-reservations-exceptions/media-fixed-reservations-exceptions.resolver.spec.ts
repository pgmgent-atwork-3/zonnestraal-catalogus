import { Test, TestingModule } from '@nestjs/testing';
import { MediaFixedReservationsExceptionsResolver } from './media-fixed-reservations-exceptions.resolver';
import { MediaFixedReservationsExceptionsService } from './media-fixed-reservations-exceptions.service';

describe('MediaFixedReservationsExceptionsResolver', () => {
  let resolver: MediaFixedReservationsExceptionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaFixedReservationsExceptionsResolver,
        MediaFixedReservationsExceptionsService,
      ],
    }).compile();

    resolver = module.get<MediaFixedReservationsExceptionsResolver>(
      MediaFixedReservationsExceptionsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
