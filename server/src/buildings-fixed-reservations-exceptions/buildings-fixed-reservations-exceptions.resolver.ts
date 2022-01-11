import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { BuildingsFixedReservationsExceptionsService } from './buildings-fixed-reservations-exceptions.service';
import { BuildingsFixedReservationsExceptions } from './entities/buildings-fixed-reservations-exceptions.entity';
// // import { CreateBuildingsFixedReservationsExceptionInput } from './dto/create-buildings-fixed-reservations-exceptions.input';
// import { UpdateBuildingsFixedReservationsExceptionInput } from './dto/update-buildings-fixed-reservations-exception.input';

@Resolver(() => BuildingsFixedReservationsExceptions)
export class BuildingsFixedReservationsExceptionsResolver {
  // constructor(
  //   private readonly buildingsFixedReservationsExceptionsService: BuildingsFixedReservationsExceptionsService,
  // ) {}

  // @Mutation(() => BuildingsFixedReservationsExceptions)
  // createBuildingsFixedReservationsException(
  //   @Args('createBuildingsFixedReservationsExceptionInput')
  //   createBuildingsFixedReservationsExceptionInput: CreateBuildingsFixedReservationsExceptionInput,
  // ) {
  //   return this.buildingsFixedReservationsExceptionsService.create(
  //     createBuildingsFixedReservationsExceptionInput,
  //   );
  // }

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
