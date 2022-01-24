import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProfilesService } from './profiles.service';
import { Profiles } from './entities/profiles.entity';
import { CreateProfileInput } from './dto/create-profile.input';

@Resolver(() => Profiles)
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  @Mutation(() => Profiles, { name: 'createUser' })
  createProfile(
    @Args('createProfileInput') createProfileInput: CreateProfileInput,
  ) {
    return this.profilesService.create(createProfileInput);
  }

  @Query(() => [Profiles], { name: 'getAllUsers' })
  findAll() {
    return this.profilesService.findAll();
  }
}
