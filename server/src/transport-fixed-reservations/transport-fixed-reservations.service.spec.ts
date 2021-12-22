import { Test, TestingModule } from '@nestjs/testing';
import { TransportFixedReservationsService } from './transport-fixed-reservations.service';

describe('TransportFixedReservationsService', () => {
  let service: TransportFixedReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportFixedReservationsService],
    }).compile();

    service = module.get<TransportFixedReservationsService>(
      TransportFixedReservationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
