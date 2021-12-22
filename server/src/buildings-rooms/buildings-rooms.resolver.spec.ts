import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsRoomsResolver } from './buildings-rooms.resolver';
import { BuildingsRoomsService } from './buildings-rooms.service';

describe('BuildingsRoomsResolver', () => {
  let resolver: BuildingsRoomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingsRoomsResolver, BuildingsRoomsService],
    }).compile();

    resolver = module.get<BuildingsRoomsResolver>(BuildingsRoomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
