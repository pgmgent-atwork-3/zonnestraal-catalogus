import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Media } from 'src/media/entities/media.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

}
