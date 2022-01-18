import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsFixedReservationsExceptionsService } from './buildings-fixed-reservations-exceptions.service';
import { BuildingsFixedReservationsExceptions } from './entities/buildings-fixed-reservations-exceptions.entity';
import { CreateBuildingsFixedReservationExceptionsInput } from './dto/create-buildings-fixed-reservations-exceptions.input';
import { DeleteBuildingsFixedReservationExceptionsInput } from './dto/delete-buildings-fixed-reservations-exceptions.input';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';
// import { UpdateBuildingsFixedReservationsExceptionInput } from './dto/update-buildings-fixed-reservations-exception.input';

@Resolver(() => BuildingsFixedReservationsExceptions)
export class BuildingsFixedReservationsExceptionsResolver {
  constructor(
    private readonly buildingsFixedReservationsExceptionsService: BuildingsFixedReservationsExceptionsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [BuildingsFixedReservationsExceptions])
  createBuildingsFixedReservationsException(
    @Args('createBuildingsFixedReservationExceptionsInput')
    createBuildingsFixedReservationsExceptionsInput: CreateBuildingsFixedReservationExceptionsInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.buildingsFixedReservationsExceptionsService.create(
        createBuildingsFixedReservationsExceptionsInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [BuildingsFixedReservationsExceptions])
  deleteBuildingsFixedReservationsException(
    @Args('deleteBuildingsFixedReservationExceptionsInput')
    deleteBuildingsFixedReservationsExceptionsInput: DeleteBuildingsFixedReservationExceptionsInput,
    @GetUser() user,
  ) {
    if (user.isAdmin === true) {
      return this.buildingsFixedReservationsExceptionsService.delete(
        deleteBuildingsFixedReservationsExceptionsInput,
      );
    }
    throw new HttpException(
      'This function is only available for administrator',
      HttpStatus.FORBIDDEN,
    );
  }
  // @Query(() => [BuildingsFixedReservationsExceptions], {
  //   name: 'buildingsFixedReservationsExceptions',
  // })
  // findAll() {
  //   return this.buildingsFixedReservationsExceptionsService.findAll();
  // }
  // @Query(() => BuildingsFixedReservationsExceptions, {
  //   name: 'buildingsFixedReservationsException',
  // })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.buildingsFixedReservationsExceptionsService.findOne(id);
  // }
  // @Mutation(() => BuildingsFixedReservationsExceptions)
  // updateBuildingsFixedReservationsException(
  //   @Args('updateBuildingsFixedReservationsExceptionInput')
  //   updateBuildingsFixedReservationsExceptionInput: UpdateBuildingsFixedReservationsExceptionInput,
  // ) {
  //   return this.buildingsFixedReservationsExceptionsService.update(
  //     updateBuildingsFixedReservationsExceptionInput.id,
  //     updateBuildingsFixedReservationsExceptionInput,
  //   );
  // }
  // @Mutation(() => BuildingsFixedReservationsExceptions)
  // removeBuildingsFixedReservationsException(
  //   @Args('id', { type: () => Int }) id: number,
  // ) {
  //   return this.buildingsFixedReservationsExceptionsService.remove(id);
  // }
}
