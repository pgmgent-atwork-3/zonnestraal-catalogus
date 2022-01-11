import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

export enum Status {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

@InputType()
export class CreateTransportFixedReservationInput {
  @IsInt()
  @Field(() => Int)
  transport_id: number;

  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  frequency: Status;

  @Field({ nullable: true })
  created_on: Date;

  @Field({ nullable: true })
  from_date: string;

  @Field({ nullable: true })
  till_date: string;

  @Field({ nullable: true })
  start_time: string;

  @Field({ nullable: true })
  end_time: string;
}
