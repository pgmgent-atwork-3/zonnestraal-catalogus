import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBuildingsRoomInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
