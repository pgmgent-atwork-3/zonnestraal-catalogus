import { CreateBuildingsRoomInput } from './create-buildings-room.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBuildingsRoomInput extends PartialType(CreateBuildingsRoomInput) {
  @Field(() => Int)
  id: number;
}
