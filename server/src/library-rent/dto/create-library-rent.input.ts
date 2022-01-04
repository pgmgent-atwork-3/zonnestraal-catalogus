import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateLibraryRentInput {
  @IsInt()
  @Field(() => Int)
  library_id: number;

  @IsString()
  @Field()
  name: string;

  @Field()
  rent_from: Date;

  @Field()
  rent_till: Date;
}
