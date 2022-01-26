import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BuildingsFixedReservationsExceptions } from 'src/buildings-fixed-reservations-exceptions/entities/buildings-fixed-reservations-exceptions.entity';
import { BuildingsRooms } from 'src/buildings-rooms/entities/buildings-rooms.entity';
import { Profiles } from 'src/profiles/entities/profiles.entity';
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
export class BuildingsFixedReservations {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(
    () => BuildingsRooms,
    (buildingsRooms) => buildingsRooms.fixedReservation,
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

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @ManyToOne(
    () => Profiles,
    (profiles) => profiles.buildingsFixedReservations,
    {
      eager: true,
      nullable: true,
    },
  )
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles, { nullable: true })
  profile: Profiles;

  @CreateDateColumn({
    nullable: true,
  })
  @Field({ nullable: true })
  from_date: Date;

  @CreateDateColumn({ nullable: true })
  @Field({ nullable: true })
  till_date: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  start_time: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  end_time: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.WEEKLY,
    nullable: true,
  })
  @Field({ nullable: true })
  frequency: Status;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  created_on: Date;

  @OneToMany(
    () => BuildingsFixedReservationsExceptions,
    (buildingsFixedReservationsExceptions) =>
      buildingsFixedReservationsExceptions.fixed_reservations,
    {
      eager: true,
    },
  )
  @Field(() => [BuildingsFixedReservationsExceptions], { nullable: true })
  excepions: BuildingsFixedReservationsExceptions[];

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  building_room_id: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  profile_id: number;
}
