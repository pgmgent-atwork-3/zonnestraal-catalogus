import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfilesService } from './profiles.service';
import { Profiles } from './entities/profiles.entity';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

@Resolver(() => Profiles)
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  // @Mutation(() => Profiles)
  // createProfile(
  //   @Args('createProfileInput') createProfileInput: CreateProfileInput,
  // ) {
  //   return this.profilesService.create(createProfileInput);
  // }

  @Query(() => [Profiles], { name: 'getAllUsers' })
  findAll() {
    return this.profilesService.findAll();
  }

  // @Query(() => Profiles, { name: 'profile' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.profilesService.findOne(id);
  // }

  // @Mutation(() => Profiles)
  // updateProfile(
  //   @Args('updateProfileInput') updateProfileInput: UpdateProfileInput,
  // ) {
  //   return this.profilesService.update(
  //     updateProfileInput.id,
  //     updateProfileInput,
  //   );
  // }

  // @Mutation(() => Profiles)
  // removeProfile(@Args('id', { type: () => Int }) id: number) {
  //   return this.profilesService.remove(id);
  // }
}
