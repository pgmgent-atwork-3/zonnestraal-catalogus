import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
  BLOCKED = 'blocked',
}

@ObjectType()
@Entity()
export class Profiles {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({
    type: 'enum',
    enum: Status,
    nullable: true,
    default: Status.ACTIVE,
  })
  @Field()
  status: Status;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  display_name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  url: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  registered_on: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  last_login: Date;
}
