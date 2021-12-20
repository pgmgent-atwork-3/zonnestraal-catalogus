import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TransportFixedReservationsException {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
