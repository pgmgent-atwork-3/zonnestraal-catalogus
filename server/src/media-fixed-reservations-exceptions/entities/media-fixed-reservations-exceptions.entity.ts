import { ObjectType, Field } from '@nestjs/graphql';
import { MediaFixedReservations } from 'src/media-fixed-reservations/entities/media-fixed-reservations.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class MediaFixedReservationsExceptions {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(
    () => MediaFixedReservations,
    (mediaFixedReservations) => mediaFixedReservations.excepions,
  )
  @JoinColumn({
    name: 'media_fixed_reservations_id',
    referencedColumnName: 'id',
  })
  @Field(() => MediaFixedReservations)
  fixed_reservations: MediaFixedReservations;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  date: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  created_on: Date;

  @Column()
  @Field()
  media_fixed_reservations_id: number;
}
