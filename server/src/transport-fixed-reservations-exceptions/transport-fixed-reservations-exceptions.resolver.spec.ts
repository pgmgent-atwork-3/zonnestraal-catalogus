import { Test, TestingModule } from '@nestjs/testing';
import { TransportFixedReservationsExceptionsResolver } from './transport-fixed-reservations-exceptions.resolver';
import { TransportFixedReservationsExceptionsService } from './transport-fixed-reservations-exceptions.service';

describe('TransportFixedReservationsExceptionsResolver', () => {
  let resolver: TransportFixedReservationsExceptionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransportFixedReservationsExceptionsResolver,
        TransportFixedReservationsExceptionsService,
      ],
    }).compile();

    resolver = module.get<TransportFixedReservationsExceptionsResolver>(
      TransportFixedReservationsExceptionsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
