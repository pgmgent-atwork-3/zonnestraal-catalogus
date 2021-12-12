import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LibraryTypesService } from './library-types.service';
import { LibraryTypes } from './entities/library-types.entity';
import { CreateLibraryTypeInput } from './dto/create-library-type.input';
import { UpdateLibraryTypeInput } from './dto/update-library-type.input';

@Resolver(() => LibraryTypes)
export class LibraryTypesResolver {
  constructor(private readonly libraryTypesService: LibraryTypesService) {}

  // @Mutation(() => LibraryTypes)
  // createLibraryType(@Args('createLibraryTypeInput') createLibraryTypeInput: CreateLibraryTypeInput) {
  //   return this.libraryTypesService.create(createLibraryTypeInput);
  // }

  // @Query(() => [LibraryType], { name: 'libraryTypes' })
  // findAll() {
  //   return this.libraryTypesService.findAll();
  // }

  // @Query(() => LibraryType, { name: 'libraryType' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.libraryTypesService.findOne(id);
  // }

  // @Mutation(() => LibraryType)
  // updateLibraryType(@Args('updateLibraryTypeInput') updateLibraryTypeInput: UpdateLibraryTypeInput) {
  //   return this.libraryTypesService.update(updateLibraryTypeInput.id, updateLibraryTypeInput);
  // }

  // @Mutation(() => LibraryType)
  // removeLibraryType(@Args('id', { type: () => Int }) id: number) {
  //   return this.libraryTypesService.remove(id);
  // }
}
