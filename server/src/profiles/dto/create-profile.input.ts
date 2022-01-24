import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
  BLOCKED = 'blocked',
}

@InputType()
export class CreateProfileInput {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @MinLength(6)
  @MaxLength(12)
  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;
}
