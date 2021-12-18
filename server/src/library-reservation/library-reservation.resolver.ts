import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LibraryReservationService } from './library-reservation.service';
import { LibraryReservation } from './entities/library-reservation.entity';
import { CreateLibraryReservationInput } from './dto/create-library-reservation.input';
import { UpdateLibraryReservationInput } from './dto/update-library-reservation.input';

@Resolver(() => LibraryReservation)
export class LibraryReservationResolver {
  constructor(private readonly libraryReservationService: LibraryReservationService) {}

  @Mutation(() => LibraryReservation)
  createLibraryReservation(@Args('createLibraryReservationInput') createLibraryReservationInput: CreateLibraryReservationInput) {
    return this.libraryReservationService.create(createLibraryReservationInput);
  }

  @Query(() => [LibraryReservation], { name: 'libraryReservation' })
  findAll() {
    return this.libraryReservationService.findAll();
  }

  @Query(() => LibraryReservation, { name: 'libraryReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.libraryReservationService.findOne(id);
  }

  @Mutation(() => LibraryReservation)
  updateLibraryReservation(@Args('updateLibraryReservationInput') updateLibraryReservationInput: UpdateLibraryReservationInput) {
    return this.libraryReservationService.update(updateLibraryReservationInput.id, updateLibraryReservationInput);
  }

  @Mutation(() => LibraryReservation)
  removeLibraryReservation(@Args('id', { type: () => Int }) id: number) {
    return this.libraryReservationService.remove(id);
  }
}
