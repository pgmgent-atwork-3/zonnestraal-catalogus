import { Test, TestingModule } from '@nestjs/testing';
import { MediaFixedReservationsExceptionsService } from './media-fixed-reservations-exceptions.service';

describe('MediaFixedReservationsExceptionsService', () => {
  let service: MediaFixedReservationsExceptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaFixedReservationsExceptionsService],
    }).compile();

    service = module.get<MediaFixedReservationsExceptionsService>(
      MediaFixedReservationsExceptionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
