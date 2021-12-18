import { ObjectType, Field } from '@nestjs/graphql';
import { MediaFixedReservationsExceptions } from 'src/media-fixed-reservations-exceptions/entities/media-fixed-reservations-exceptions.entity';
import { Media } from 'src/media/entities/media.entity';

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

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  from: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  till: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  start: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  end: Date;

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
    () => MediaFixedReservationsExceptions,
    (mediaFixedReservations) => mediaFixedReservations.fixed_reservations,
  )
  @Field(() => [MediaFixedReservationsExceptions], { nullable: true })
  excepions: MediaFixedReservationsExceptions[];
}
