import { InputType, Field, Int } from '@nestjs/graphql';

export enum Status {
  YES = 'Y',
  NO = 'N',
}

@InputType()
export class UpdateLibraryReservationInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  deleted: Status;
}
