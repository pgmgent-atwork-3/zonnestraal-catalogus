import { ObjectType, Field } from '@nestjs/graphql';
import { TransportFixedReservations } from 'src/transport-fixed-reservations/entities/transport-fixed-reservations.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class TransportFixedReservationsExceptions {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(
    () => TransportFixedReservations,
    (transportFixedReservations) => transportFixedReservations.excepions,
    // {
    //   eager: true,
    // },
  )
  @JoinColumn({
    name: 'transport_fixed_reservations_id',
    referencedColumnName: 'id',
  })
  @Field(() => TransportFixedReservations)
  fixedReservations: TransportFixedReservations;

  @CreateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  date: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  created_on: Date;
}
