import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsRoomsService } from './buildings-rooms.service';

describe('BuildingsRoomsService', () => {
  let service: BuildingsRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingsRoomsService],
    }).compile();

    service = module.get<BuildingsRoomsService>(BuildingsRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
