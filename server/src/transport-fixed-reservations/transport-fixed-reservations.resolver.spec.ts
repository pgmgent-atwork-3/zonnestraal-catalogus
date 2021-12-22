import { Test, TestingModule } from '@nestjs/testing';
import { TransportFixedReservationsResolver } from './transport-fixed-reservations.resolver';
import { TransportFixedReservationsService } from './transport-fixed-reservations.service';

describe('TransportFixedReservationsResolver', () => {
  let resolver: TransportFixedReservationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransportFixedReservationsResolver,
        TransportFixedReservationsService,
      ],
    }).compile();

    resolver = module.get<TransportFixedReservationsResolver>(
      TransportFixedReservationsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
