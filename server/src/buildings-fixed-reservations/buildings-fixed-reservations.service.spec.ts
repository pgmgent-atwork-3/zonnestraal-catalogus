import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsFixedReservationsService } from './buildings-fixed-reservations.service';

describe('BuildingsFixedReservationsService', () => {
  let service: BuildingsFixedReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingsFixedReservationsService],
    }).compile();

    service = module.get<BuildingsFixedReservationsService>(
      BuildingsFixedReservationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
