import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from './entities/media.entity';
import { MostPopularMedia } from './entities/most-popular-media';

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [Media], { name: 'getAllMedia' })
  findAll() {
    return this.mediaService.findAll();
  }

  @Query(() => [MostPopularMedia], { name: 'getMostCommonlyMedia' })
  find() {
    return this.mediaService.find();
  }

  @Query(() => Media, { name: 'getMediaById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaService.findOne(id);
  }
}
