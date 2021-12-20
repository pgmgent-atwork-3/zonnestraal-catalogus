import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransportService } from './transport.service';
import { Transport } from './entities/transport.entity';
import { CreateTransportInput } from './dto/create-transport.input';
import { UpdateTransportInput } from './dto/update-transport.input';

@Resolver(() => Transport)
export class TransportResolver {
  constructor(private readonly transportService: TransportService) {}

  @Mutation(() => Transport)
  createTransport(
    @Args('createTransportInput') createTransportInput: CreateTransportInput,
  ) {
    return this.transportService.create(createTransportInput);
  }

  @Query(() => [Transport], { name: 'transport' })
  findAll() {
    return this.transportService.findAll();
  }

  @Query(() => Transport, { name: 'transport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.transportService.findOne(id);
  }

  @Mutation(() => Transport)
  updateTransport(
    @Args('updateTransportInput') updateTransportInput: UpdateTransportInput,
  ) {
    return this.transportService.update(
      updateTransportInput.id,
      updateTransportInput,
    );
  }

  @Mutation(() => Transport)
  removeTransport(@Args('id', { type: () => Int }) id: number) {
    return this.transportService.remove(id);
  }
}
