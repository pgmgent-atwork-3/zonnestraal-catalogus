import { Test, TestingModule } from '@nestjs/testing';
import { TransportResolver } from './transport.resolver';
import { TransportService } from './transport.service';

describe('TransportResolver', () => {
  let resolver: TransportResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportResolver, TransportService],
    }).compile();

    resolver = module.get<TransportResolver>(TransportResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
