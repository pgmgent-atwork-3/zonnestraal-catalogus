import { Resolver, Mutation, Args } from '@nestjs/graphql';
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

  @UseGuards(JwtAuthGuard)
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
}
