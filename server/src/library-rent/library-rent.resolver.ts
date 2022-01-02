import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LibraryRentService } from './library-rent.service';
import { LibraryRent } from './entities/library-rent.entity';
import { CreateLibraryRentInput } from './dto/create-library-rent.input';
import { UpdateLibraryRentInput } from './dto/update-library-rent.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';

@Resolver(() => LibraryRent)
export class LibraryRentResolver {
  constructor(private readonly libraryRentService: LibraryRentService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => LibraryRent, { name: 'createLibraryRent' })
  createLibraryRent(
    @Args('createLibraryRentInput')
    createLibraryRentInput: CreateLibraryRentInput,
    @GetUser() user,
  ) {
    return this.libraryRentService.create(user.id, createLibraryRentInput);
  }

  @Query(() => [LibraryRent], { name: 'libraryRent' })
  findAll() {
    return this.libraryRentService.findAll();
  }

  @Query(() => LibraryRent, { name: 'libraryRent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.libraryRentService.findOne(id);
  }

  @Mutation(() => LibraryRent)
  updateLibraryRent(
    @Args('updateLibraryRentInput')
    updateLibraryRentInput: UpdateLibraryRentInput,
  ) {
    return this.libraryRentService.update(
      updateLibraryRentInput.id,
      updateLibraryRentInput,
    );
  }

  @Mutation(() => LibraryRent)
  removeLibraryRent(@Args('id', { type: () => Int }) id: number) {
    return this.libraryRentService.remove(id);
  }
}
