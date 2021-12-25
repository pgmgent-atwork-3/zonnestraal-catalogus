import { CreateMediaTypeInput } from './create-media-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaTypeInput extends PartialType(CreateMediaTypeInput) {
  @Field(() => Int)
  id: number;
}
