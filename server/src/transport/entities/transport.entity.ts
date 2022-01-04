import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TransportFixedReservations } from 'src/transport-fixed-reservations/entities/transport-fixed-reservations.entity';
import { TransportReservations } from 'src/transport-reservations/entities/transport-reservations.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  YES = 'Y',
  NO = 'N',
}

@ObjectType()
@Entity()
export class Transport {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  brand: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  type: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  number: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  color: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  color_calendar: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  remarks: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  language: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NO,
    nullable: true,
  })
  @Field({ nullable: true })
  hidden: Status;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  meta_id: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  edited_on: Date;

  @OneToMany(
    () => TransportReservations,
    (transportReservations) => transportReservations.transport,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [TransportReservations])
  reservation: TransportReservations[];

  @OneToMany(
    () => TransportFixedReservations,
    (transportFixedReservations) => transportFixedReservations.transport,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [TransportFixedReservations])
  fixedReservation: TransportFixedReservations[];
}
