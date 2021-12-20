import { Test, TestingModule } from '@nestjs/testing';
import { TransportReservationsResolver } from './transport-reservations.resolver';
import { TransportReservationsService } from './transport-reservations.service';

describe('TransportReservationsResolver', () => {
  let resolver: TransportReservationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportReservationsResolver, TransportReservationsService],
    }).compile();

    resolver = module.get<TransportReservationsResolver>(
      TransportReservationsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
