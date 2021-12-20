import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsRoomsReservationsResolver } from './buildings-rooms-reservations.resolver';
import { BuildingsRoomsReservationsService } from './buildings-rooms-reservations.service';

describe('BuildingsRoomsReservationsResolver', () => {
  let resolver: BuildingsRoomsReservationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BuildingsRoomsReservationsResolver,
        BuildingsRoomsReservationsService,
      ],
    }).compile();

    resolver = module.get<BuildingsRoomsReservationsResolver>(
      BuildingsRoomsReservationsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
