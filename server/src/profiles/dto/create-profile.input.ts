import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
