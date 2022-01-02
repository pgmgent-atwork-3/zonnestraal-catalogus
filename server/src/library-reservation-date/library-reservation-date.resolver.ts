import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LibraryReservationDateService } from './library-reservation-date.service';
import { LibraryReservationDate } from './entities/library-reservation-date.entity';
import { CreateLibraryReservationDateInput } from './dto/create-library-reservation-date.input';
import { UpdateLibraryReservationDateInput } from './dto/update-library-reservation-date.input';

@Resolver(() => LibraryReservationDate)
export class LibraryReservationDateResolver {
  constructor(
    private readonly libraryReservationDateService: LibraryReservationDateService,
  ) {}

  // @Mutation(() => LibraryReservationDate)
  // createLibraryReservationDate(
  //   @Args('createLibraryReservationDateInput')
  //   createLibraryReservationDateInput: CreateLibraryReservationDateInput,
  // ) {
  //   return this.libraryReservationDateService.create(
  //     createLibraryReservationDateInput,
  //   );
  // }

  @Query(() => [LibraryReservationDate], { name: 'libraryReservationDate' })
  findAll() {
    return this.libraryReservationDateService.findAll();
  }

  @Query(() => LibraryReservationDate, { name: 'libraryReservationDate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.libraryReservationDateService.findOne(id);
  }

  @Mutation(() => LibraryReservationDate)
  updateLibraryReservationDate(
    @Args('updateLibraryReservationDateInput')
    updateLibraryReservationDateInput: UpdateLibraryReservationDateInput,
  ) {
    return this.libraryReservationDateService.update(
      updateLibraryReservationDateInput.id,
      updateLibraryReservationDateInput,
    );
  }

  @Mutation(() => LibraryReservationDate)
  removeLibraryReservationDate(@Args('id', { type: () => Int }) id: number) {
    return this.libraryReservationDateService.remove(id);
  }
}
