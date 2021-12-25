import { CreateLibraryRentInput } from './create-library-rent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLibraryRentInput extends PartialType(
  CreateLibraryRentInput,
) {
  @Field(() => Int)
  id: number;
}
