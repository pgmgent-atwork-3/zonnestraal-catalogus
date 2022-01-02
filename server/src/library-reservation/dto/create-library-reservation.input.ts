import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';
import { CreateLibraryReservationDateInput } from 'src/library-reservation-date/dto/create-library-reservation-date.input';

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

  @Field(() => [CreateLibraryReservationDateInput])
  createLibraryReservationDateInput: CreateLibraryReservationDateInput[];
}
