import { Field, ObjectType } from '@nestjs/graphql';
import { Profiles } from './profiles.entity';

@ObjectType()
export class UserToken {
  @Field()
  token: string;

  @Field()
  user: Profiles;
}
