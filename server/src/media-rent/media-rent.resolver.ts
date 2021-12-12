import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaRentService } from './media-rent.service';
import { MediaRent } from './entities/media-rent.entity';
import { CreateMediaRentInput } from './dto/create-media-rent.input';
import { UpdateMediaRentInput } from './dto/update-media-rent.input';

@Resolver(() => MediaRent)
export class MediaRentResolver {
  constructor(private readonly mediaRentService: MediaRentService) {}

  @Mutation(() => MediaRent)
  createMediaRent(@Args('createMediaRentInput') createMediaRentInput: CreateMediaRentInput) {
    return this.mediaRentService.create(createMediaRentInput);
  }

  @Query(() => [MediaRent], { name: 'mediaRent' })
  findAll() {
    return this.mediaRentService.findAll();
  }

  @Query(() => MediaRent, { name: 'mediaRent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaRentService.findOne(id);
  }

  @Mutation(() => MediaRent)
  updateMediaRent(@Args('updateMediaRentInput') updateMediaRentInput: UpdateMediaRentInput) {
    return this.mediaRentService.update(updateMediaRentInput.id, updateMediaRentInput);
  }

  @Mutation(() => MediaRent)
  removeMediaRent(@Args('id', { type: () => Int }) id: number) {
    return this.mediaRentService.remove(id);
  }
}
