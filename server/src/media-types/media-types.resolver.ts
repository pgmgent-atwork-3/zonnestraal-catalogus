import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaTypesService } from './media-types.service';
import { MediaTypes } from './entities/media-type.entity';
import { CreateMediaTypeInput } from './dto/create-media-type.input';
import { UpdateMediaTypeInput } from './dto/update-media-type.input';

@Resolver(() => MediaTypes)
export class MediaTypesResolver {
  constructor(private readonly mediaTypesService: MediaTypesService) {}

  // @Mutation(() => MediaType)
  // createMediaType(@Args('createMediaTypeInput') createMediaTypeInput: CreateMediaTypeInput) {
  //   return this.mediaTypesService.create(createMediaTypeInput);
  // }

  @Query(() => [MediaTypes], { name: 'mediaTypes' })
  findAll() {
    return this.mediaTypesService.findAll();
  }

  // @Query(() => MediaType, { name: 'mediaType' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaTypesService.findOne(id);
  // }

  // @Mutation(() => MediaType)
  // updateMediaType(@Args('updateMediaTypeInput') updateMediaTypeInput: UpdateMediaTypeInput) {
  //   return this.mediaTypesService.update(updateMediaTypeInput.id, updateMediaTypeInput);
  // }

  // @Mutation(() => MediaType)
  // removeMediaType(@Args('id', { type: () => Int }) id: number) {
  //   return this.mediaTypesService.remove(id);
  // }
}
