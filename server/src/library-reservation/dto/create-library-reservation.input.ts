import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateLibraryReservationInput {
  @IsInt()
  @Field(() => Int)
  library_id: number;

  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  created_on: Date;
}
