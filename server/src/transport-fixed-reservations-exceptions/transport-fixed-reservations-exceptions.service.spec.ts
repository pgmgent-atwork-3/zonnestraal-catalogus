import { Test, TestingModule } from '@nestjs/testing';
import { TransportFixedReservationsExceptionsService } from './transport-fixed-reservations-exceptions.service';

describe('TransportFixedReservationsExceptionsService', () => {
  let service: TransportFixedReservationsExceptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportFixedReservationsExceptionsService],
    }).compile();

    service = module.get<TransportFixedReservationsExceptionsService>(
      TransportFixedReservationsExceptionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
