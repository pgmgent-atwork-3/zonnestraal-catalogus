import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BuildingsRooms } from 'src/buildings-rooms/entities/buildings-rooms.entity';
import { Profiles } from 'src/profiles/entities/profiles.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class BuildingsRoomsReservations {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(
    () => BuildingsRooms,
    (buildingsRooms) => buildingsRooms.roomReservation,
    {
      eager: true,
      nullable: true,
    },
  )
  @JoinColumn({
    name: 'building_room_id',
    referencedColumnName: 'id',
  })
  @Field(() => BuildingsRooms, { nullable: true })
  room: BuildingsRooms;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  from_date: Date;

  @ManyToOne(() => Profiles, (profiles) => profiles.roomReservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles)
  profile: Profiles;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  till_date: Date;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  edited_on: Date;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  building_room_id: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  profile_id: number;
}
