import { Resolver } from '@nestjs/graphql';
import { LibraryTypesService } from './library-types.service';
import { LibraryTypes } from './entities/library-types.entity';

@Resolver(() => LibraryTypes)
export class LibraryTypesResolver {
  constructor(private readonly libraryTypesService: LibraryTypesService) {}
}
