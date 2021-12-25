import { CreateMediaRentInput } from './create-media-rent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMediaRentInput extends PartialType(CreateMediaRentInput) {
  @Field(() => Int)
  id: number;
}
