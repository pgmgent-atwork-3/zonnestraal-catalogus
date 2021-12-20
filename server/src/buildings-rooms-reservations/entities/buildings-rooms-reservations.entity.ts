import { ObjectType, Field } from '@nestjs/graphql';
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
    },
  )
  @JoinColumn({
    name: 'building_room_id',
    referencedColumnName: 'id',
  })
  @Field(() => BuildingsRooms)
  room: BuildingsRooms;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  from: Date;

  @ManyToOne(() => Profiles, (profiles) => profiles.roomReservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles)
  profile: Profiles;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  till: Date;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  edited_on: Date;
}
