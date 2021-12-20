import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class BuildingsRoomsReservations {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  from: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  till: Date;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  edited_on: Date;
}
