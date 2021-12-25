import { ObjectType, Field } from '@nestjs/graphql';
import { MediaFixedReservations } from 'src/media-fixed-reservations/entities/media-fixed-reservations.entity';
import {
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
    {
      eager: true,
    },
  )
  @JoinColumn({
    name: 'media_fixed_reservations_id',
    referencedColumnName: 'id',
  })
  @Field(() => MediaFixedReservations)
  fixed_reservations: MediaFixedReservations;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  date: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;
}
