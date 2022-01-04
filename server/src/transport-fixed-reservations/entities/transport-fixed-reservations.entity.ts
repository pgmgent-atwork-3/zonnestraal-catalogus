import { ObjectType, Field } from '@nestjs/graphql';
import { Profiles } from 'src/profiles/entities/profiles.entity';
import { TransportFixedReservationsExceptions } from 'src/transport-fixed-reservations-exceptions/entities/transport-fixed-reservations-exceptions.entity';
import { Transport } from 'src/transport/entities/transport.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Status {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

@ObjectType()
@Entity()
export class TransportFixedReservations {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(() => Transport, (transport) => transport.fixedReservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'transport_id',
    referencedColumnName: 'id',
  })
  @Field(() => Transport)
  transport: Transport;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @ManyToOne(
    () => Profiles,
    (profiles) => profiles.transportFixedReservations,
    {
      eager: true,
      nullable: true,
    },
  )
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles, { nullable: true })
  profile: Profiles;

  @Column({
    type: 'date',
    nullable: true,
  })
  @Field({ nullable: true })
  from_date: string;

  @Column({ type: 'date', nullable: true })
  @Field({ nullable: true })
  till_date: string;

  @Column({ type: 'time', nullable: true })
  @Field({ nullable: true })
  start_time: string;

  @Column({ type: 'time', nullable: true })
  @Field({ nullable: true })
  end_time: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.WEEKLY,
    nullable: true,
  })
  @Field({ nullable: true })
  frequency: Status;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  created_on: Date;

  @OneToMany(
    () => TransportFixedReservationsExceptions,
    (transportFixedReservationsExceptions) =>
      transportFixedReservationsExceptions.fixedReservations,
  )
  @Field(() => [TransportFixedReservationsExceptions], { nullable: true })
  excepions: TransportFixedReservationsExceptions[];
}
