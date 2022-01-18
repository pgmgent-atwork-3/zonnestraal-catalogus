import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { TransportService } from './transport.service';
import { Transport } from './entities/transport.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Transport)
export class TransportResolver {
  constructor(private readonly transportService: TransportService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Transport], { name: 'getAllCars' })
  findAll() {
    return this.transportService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Transport, { name: 'getOneTransportById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportService.findOne(id);
  }
}
