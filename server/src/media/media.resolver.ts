import { Resolver, Query } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from './entities/media.entity';
import { MostPopularMedia } from './entities/most-popular-media';

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  // @Mutation(() => Media)
  // // createMedia(@Args('createMediaInput') createMediaInput: CreateMediaInput) {
  // //   return this.mediaService.create(createMediaInput);
  // // }

  @Query(() => [Media], { name: 'getAllMedia' })
  findAll() {
    return this.mediaService.findAll();
  }

  @Query(() => [MostPopularMedia], { name: 'getMostCommonlyMedia' })
  find() {
    return this.mediaService.find();
  }

  // @Query(() => Media, { name: 'media' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaService.findOne(id);
  // }

  // @Mutation(() => Media)
  // updateMedia(@Args('updateMediaInput') updateMediaInput: UpdateMediaInput) {
  //   return this.mediaService.update(updateMediaInput.id, updateMediaInput);
  // }

  // @Mutation(() => Media)
  // removeMedia(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaService.remove(id);
  // }
}
