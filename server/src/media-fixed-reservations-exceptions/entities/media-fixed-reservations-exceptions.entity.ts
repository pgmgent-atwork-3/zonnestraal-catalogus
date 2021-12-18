import { ObjectType, Field } from '@nestjs/graphql';
import { MediaFixedReservations } from 'src/media-fixed-reservations/entities/media-fixed-reservations.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
    name: 'media_id',
    referencedColumnName: 'id',
  })
  @Field(() => MediaFixedReservations)
  fixed_reservations: MediaFixedReservations;
}
