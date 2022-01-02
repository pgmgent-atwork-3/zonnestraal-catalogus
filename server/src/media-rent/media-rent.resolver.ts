import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaRentService } from './media-rent.service';
import { MediaRent } from './entities/media-rent.entity';
import { CreateMediaRentInput } from './dto/create-media-rent.input';
import { UpdateMediaRentInput } from './dto/update-media-rent.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => MediaRent)
export class MediaRentResolver {
  constructor(private readonly mediaRentService: MediaRentService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MediaRent, { name: 'createMediaRent' })
  createMediaRent(
    @Args('createMediaRentInput') createMediaRentInput: CreateMediaRentInput,
    @GetUser() user,
  ) {
    return this.mediaRentService.create(user.id, createMediaRentInput);
  }

  @Query(() => [MediaRent], { name: 'mediaRent' })
  findAll() {
    return this.mediaRentService.findAll();
  }

  @Query(() => MediaRent, { name: 'getOneMediaRent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mediaRentService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MediaRent, { name: 'updateMediaRent' })
  updateMediaRent(
    @Args('updateMediaRentInput') updateMediaRentInput: UpdateMediaRentInput,
  ) {
    return this.mediaRentService.update(
      updateMediaRentInput.id,
      updateMediaRentInput,
    );
  }

  @Mutation(() => MediaRent)
  removeMediaRent(@Args('id', { type: () => Int }) id: number) {
    return this.mediaRentService.remove(id);
  }
}
