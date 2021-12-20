import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TransportReservation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
