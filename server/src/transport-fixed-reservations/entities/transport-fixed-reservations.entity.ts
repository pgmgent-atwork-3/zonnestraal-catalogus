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

  @CreateDateColumn({
    nullable: true,
  })
  @Field({ nullable: true })
  from: Date;

  @CreateDateColumn({ nullable: true })
  @Field({ nullable: true })
  till: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  start: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  end: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.WEEKLY,
    nullable: true,
  })
  @Field({ nullable: true })
  frequency: Status;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;

  @OneToMany(
    () => TransportFixedReservationsExceptions,
    (transportFixedReservationsExceptions) =>
      transportFixedReservationsExceptions.fixed_reservations,
  )
  @Field(() => [TransportFixedReservationsExceptions], { nullable: true })
  excepions: TransportFixedReservationsExceptions[];
}
