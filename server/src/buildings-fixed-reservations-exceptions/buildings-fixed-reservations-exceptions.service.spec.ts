import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsFixedReservationsExceptionsService } from './buildings-fixed-reservations-exceptions.service';

describe('BuildingsFixedReservationsExceptionsService', () => {
  let service: BuildingsFixedReservationsExceptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingsFixedReservationsExceptionsService],
    }).compile();

    service = module.get<BuildingsFixedReservationsExceptionsService>(
      BuildingsFixedReservationsExceptionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
