import { Test, TestingModule } from '@nestjs/testing';
import { MediaFixedReservationsService } from './media-fixed-reservations.service';

describe('MediaFixedReservationsService', () => {
  let service: MediaFixedReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaFixedReservationsService],
    }).compile();

    service = module.get<MediaFixedReservationsService>(
      MediaFixedReservationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
