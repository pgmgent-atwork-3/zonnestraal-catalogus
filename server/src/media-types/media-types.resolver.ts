import { Resolver } from '@nestjs/graphql';
import { MediaTypesService } from './media-types.service';
import { MediaTypes } from './entities/media-type.entity';

@Resolver(() => MediaTypes)
export class MediaTypesResolver {
  constructor(private readonly mediaTypesService: MediaTypesService) {}
}
