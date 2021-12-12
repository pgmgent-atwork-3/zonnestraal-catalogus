import { CreateLibraryTypeInput } from './create-library-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLibraryTypeInput extends PartialType(CreateLibraryTypeInput) {
  @Field(() => Int)
  id: number;
}
