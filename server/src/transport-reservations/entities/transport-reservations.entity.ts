import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Profiles } from 'src/profiles/entities/profiles.entity';
import { Transport } from 'src/transport/entities/transport.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class TransportReservations {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  from_date: Date;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  till_date: Date;

  @ManyToOne(() => Profiles, (profiles) => profiles.transportReservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles)
  profile: Profiles;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

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

  @ManyToOne(() => Transport, (transport) => transport.reservation, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({
    name: 'transport_id',
    referencedColumnName: 'id',
  })
  @Field(() => Transport, { nullable: true })
  transport: Transport;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  transport_id: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  profile_id: number;
}
