import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateTransportReservationInput {
  @IsInt()
  @Field(() => Int)
  transport_id: number;

  @IsString()
  @Field()
  name: string;

  @Field()
  from_date: Date;

  @Field()
  till_date: Date;
}
