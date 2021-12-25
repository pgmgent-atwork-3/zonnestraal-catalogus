import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsFixedReservationsExceptionsResolver } from './buildings-fixed-reservations-exceptions.resolver';
import { BuildingsFixedReservationsExceptionsService } from './buildings-fixed-reservations-exceptions.service';

describe('BuildingsFixedReservationsExceptionsResolver', () => {
  let resolver: BuildingsFixedReservationsExceptionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BuildingsFixedReservationsExceptionsResolver,
        BuildingsFixedReservationsExceptionsService,
      ],
    }).compile();

    resolver = module.get<BuildingsFixedReservationsExceptionsResolver>(
      BuildingsFixedReservationsExceptionsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
