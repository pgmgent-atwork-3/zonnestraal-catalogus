import { ObjectType, Field } from '@nestjs/graphql';
import { BuildingsFixedReservations } from 'src/buildings-fixed-reservations/entities/buildings-fixed-reservations.entity';
import { BuildingsRoomsReservations } from 'src/buildings-rooms-reservations/entities/buildings-rooms-reservations.entity';
import { Buildings } from 'src/buildings/entities/buildings.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class BuildingsRooms {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

  @ManyToOne(() => Buildings, (buildings) => buildings.room, {
    eager: true,
  })
  @JoinColumn({
    name: 'building_id',
    referencedColumnName: 'id',
  })
  @Field(() => Buildings)
  building: Buildings;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  color_calendar: string;

  @OneToMany(
    () => BuildingsRoomsReservations,
    (buildingsRoomsReservations) => buildingsRoomsReservations.room,
    {
      cascade: ['insert', 'update', 'remove'],
      nullable: true,
    },
  )
  @JoinColumn()
  @Field(() => [BuildingsRoomsReservations], { nullable: true })
  roomReservation: BuildingsRoomsReservations[];

  @OneToMany(
    () => BuildingsFixedReservations,
    (buildingsFixedReservations) => buildingsFixedReservations.room,
    {
      cascade: ['insert', 'update', 'remove'],
      nullable: true,
    },
  )
  @JoinColumn()
  @Field(() => [BuildingsFixedReservations], { nullable: true })
  fixedReservation: BuildingsFixedReservations[];
}
