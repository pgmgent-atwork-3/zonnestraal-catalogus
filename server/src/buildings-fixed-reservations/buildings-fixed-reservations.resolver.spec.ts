import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsFixedReservationsResolver } from './buildings-fixed-reservations.resolver';
import { BuildingsFixedReservationsService } from './buildings-fixed-reservations.service';

describe('BuildingsFixedReservationsResolver', () => {
  let resolver: BuildingsFixedReservationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BuildingsFixedReservationsResolver,
        BuildingsFixedReservationsService,
      ],
    }).compile();

    resolver = module.get<BuildingsFixedReservationsResolver>(
      BuildingsFixedReservationsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
