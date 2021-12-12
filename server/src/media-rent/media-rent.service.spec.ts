import { Test, TestingModule } from '@nestjs/testing';
import { MediaRentService } from './media-rent.service';

describe('MediaRentService', () => {
  let service: MediaRentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaRentService],
    }).compile();

    service = module.get<MediaRentService>(MediaRentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
