import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Buildings {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column()
  @Field(() => String)
  language: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  street: string;

  @Column()
  @Field(() => String)
  number: string;

  @Column()
  @Field(() => String)
  zip: string;

  @Column()
  @Field(() => String)
  city: string;

  @Column()
  @Field(() => String)
  country: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  meta_id: number;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @Field({ nullable: true })
  edited_on: Date;
}
