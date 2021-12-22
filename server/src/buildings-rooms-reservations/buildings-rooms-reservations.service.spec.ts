import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsRoomsReservationsService } from './buildings-rooms-reservations.service';

describe('BuildingsRoomsReservationsService', () => {
  let service: BuildingsRoomsReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingsRoomsReservationsService],
    }).compile();

    service = module.get<BuildingsRoomsReservationsService>(
      BuildingsRoomsReservationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
