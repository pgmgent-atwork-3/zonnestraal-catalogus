import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
export enum Status {
  YES = 'Y',
  NO = 'N',
}
@ObjectType()
@Entity()
export class LibraryReservation {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NO,
    nullable: true,
  })
  @Field({ nullable: true })
  deleted: Status;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;
}
