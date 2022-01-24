import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { LibraryReservationDateService } from './library-reservation-date.service';
import { LibraryReservationDate } from './entities/library-reservation-date.entity';

@Resolver(() => LibraryReservationDate)
export class LibraryReservationDateResolver {
  constructor(
    private readonly libraryReservationDateService: LibraryReservationDateService,
  ) {}

  @Query(() => LibraryReservationDate, { name: 'libraryReservationDate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.libraryReservationDateService.findOne(id);
  }
}
