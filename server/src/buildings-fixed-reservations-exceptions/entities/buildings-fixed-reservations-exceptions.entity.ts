import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BuildingsFixedReservationsExceptions {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
