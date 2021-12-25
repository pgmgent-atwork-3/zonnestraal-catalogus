import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBuildingsFixedReservationsExceptionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
