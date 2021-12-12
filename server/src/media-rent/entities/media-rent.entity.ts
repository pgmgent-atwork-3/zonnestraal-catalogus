import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Status {
  YES = 'Y',
  NO = 'N',
}

@ObjectType()
@Entity()
export class MediaRent {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  rent_from: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  rent_till: Date;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NO,
    nullable: true,
  })
  @Field({ nullable: true })
  returned: Status;
}
