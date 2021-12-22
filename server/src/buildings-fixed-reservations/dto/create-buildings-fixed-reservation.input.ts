import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBuildingsFixedReservationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
