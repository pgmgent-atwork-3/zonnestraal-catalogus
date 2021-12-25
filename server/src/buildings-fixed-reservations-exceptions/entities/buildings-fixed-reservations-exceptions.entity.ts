import { ObjectType, Field } from '@nestjs/graphql';
import { BuildingsFixedReservations } from 'src/buildings-fixed-reservations/entities/buildings-fixed-reservations.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class BuildingsFixedReservationsExceptions {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(
    () => BuildingsFixedReservations,
    (buildingsFixedReservations) => buildingsFixedReservations.excepions,
    {
      eager: true,
    },
  )
  @JoinColumn({
    name: 'buildings_fixed_reservations_id',
    referencedColumnName: 'id',
  })
  @Field(() => BuildingsFixedReservations)
  fixed_reservations: BuildingsFixedReservations;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  date: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;
}
