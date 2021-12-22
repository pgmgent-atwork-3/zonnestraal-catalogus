import { Test, TestingModule } from '@nestjs/testing';
import { TransportReservationsService } from './transport-reservations.service';

describe('TransportReservationsService', () => {
  let service: TransportReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportReservationsService],
    }).compile();

    service = module.get<TransportReservationsService>(
      TransportReservationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
