import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LibraryReservationService } from './library-reservation.service';
import { LibraryReservation } from './entities/library-reservation.entity';
import { CreateLibraryReservationInput } from './dto/create-library-reservation.input';
import { UpdateLibraryReservationInput } from './dto/update-library-reservation.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';
import { CreateLibraryReservationDateInput } from 'src/library-reservation-date/dto/create-library-reservation-date.input';

@Resolver(() => LibraryReservation)
export class LibraryReservationResolver {
  constructor(
    private readonly libraryReservationService: LibraryReservationService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => LibraryReservation, { name: 'createLibraryReservation' })
  createLibraryReservation(
    @Args('createLibraryReservationInput')
    createLibraryReservationInput: CreateLibraryReservationInput,
    @Args('createLibraryReservationDateInput')
    createLibraryReservationDateInput: CreateLibraryReservationDateInput,
    @GetUser() user,
  ) {
    return this.libraryReservationService.create(
      user.id,
      createLibraryReservationInput,
      createLibraryReservationDateInput,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [LibraryReservation], { name: 'GetAllLibraryReservationByUser' })
  findAll(@GetUser() user) {
    return this.libraryReservationService.findAll(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [LibraryReservation], {
    name: 'getAllLibraryReservationForAdmin',
  })
  findAllForAdmin(@GetUser() user) {
    if (user.isAdmin === true) {
      return this.libraryReservationService.findAllForAdmin();
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @Query(() => LibraryReservation, { name: 'GetOnelibraryReservationById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.libraryReservationService.findOne(id);
  }

  @Mutation(() => LibraryReservation)
  updateLibraryReservation(
    @Args('updateLibraryReservationInput')
    updateLibraryReservationInput: UpdateLibraryReservationInput,
  ) {
    return this.libraryReservationService.update(
      updateLibraryReservationInput.id,
      updateLibraryReservationInput,
    );
  }

  @Mutation(() => LibraryReservation)
  removeLibraryReservation(@Args('id', { type: () => Int }) id: number) {
    return this.libraryReservationService.remove(id);
  }
}
