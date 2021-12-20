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

  @ManyToOne(() => Profiles, (profiles) => profiles.mediaFixedReservation, {
    eager: true,
    nullable: true,
  })
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
  from: Date;

  @CreateDateColumn({ nullable: true })
  @Field({ nullable: true })
  till: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  start: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  end: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.WEEKLY,
    nullable: true,
  })
  @Field({ nullable: true })
  frequency: Status;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;
}
