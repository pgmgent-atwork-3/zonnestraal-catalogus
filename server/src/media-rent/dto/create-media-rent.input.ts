import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateMediaRentInput {
  @IsInt()
  @Field(() => Int)
  media_id: number;

  @IsString()
  @Field()
  name: string;

  @Field()
  rent_from: Date;

  @Field()
  rent_till: Date;
}
