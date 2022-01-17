import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MediaFixedReservationsExceptions } from 'src/media-fixed-reservations-exceptions/entities/media-fixed-reservations-exceptions.entity';
import { Media } from 'src/media/entities/media.entity';
import { Profiles } from 'src/profiles/entities/profiles.entity';

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
export class MediaFixedReservations {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(() => Media, (media) => media.fixedReservation, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({
    name: 'media_id',
    referencedColumnName: 'id',
  })
  @Field(() => Media, { nullable: true })
  media: Media;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

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
    () => MediaFixedReservationsExceptions,
    (mediaFixedReservations) => mediaFixedReservations.fixed_reservations,
    {
      eager: true,
    },
  )
  @Field(() => [MediaFixedReservationsExceptions], { nullable: true })
  excepions: MediaFixedReservationsExceptions[];

  @ManyToOne(() => Profiles, (profiles) => profiles.mediaFixedReservation, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles, { nullable: true })
  profile: Profiles;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  media_id: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  profile_id: number;
}
