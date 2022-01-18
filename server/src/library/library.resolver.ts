import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { LibraryService } from './library.service';
import { Library } from './entities/library.entity';

@Resolver(() => Library)
export class LibraryResolver {
  constructor(private readonly libraryService: LibraryService) {}

  @Query(() => [Library], { name: 'getAllLibraries' })
  findAll() {
    return this.libraryService.findAll();
  }

  @Query(() => [Library], { name: 'getNewLibraries' })
  findNew() {
    return this.libraryService.find();
  }

  @Query(() => Library, { name: 'getLibraryById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.libraryService.findOne(id);
  }
}
