import { ObjectType, Field } from '@nestjs/graphql';
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
    },
  )
  @JoinColumn()
  @Field(() => [BuildingsRoomsReservations])
  roomReservation: BuildingsRoomsReservations[];
}
