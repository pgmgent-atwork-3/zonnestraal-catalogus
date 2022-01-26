import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaFixedReservationsExceptionInput {
  @Field(() => Number)
  media_fixed_reservations_id: number;

  @Field({ nullable: true })
  date: string;
}
