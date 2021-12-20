import { ObjectType, Field } from '@nestjs/graphql';
import { BuildingsFixedReservations } from 'src/buildings-fixed-reservations/entities/buildings-fixed-reservations.entity';
import { BuildingsRoomsReservations } from 'src/buildings-rooms-reservations/entities/buildings-rooms-reservations.entity';
import { LibraryRent } from 'src/library-rent/entities/library-rent.entity';
import { LibraryReservation } from 'src/library-reservation/entities/library-reservation.entity';
import { MediaFixedReservations } from 'src/media-fixed-reservations/entities/media-fixed-reservations.entity';
import { MediaRent } from 'src/media-rent/entities/media-rent.entity';
import { ProfilesGroupsRights } from 'src/profiles-groups-rights/entities/profiles-groups-rights.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
  BLOCKED = 'blocked',
}

@ObjectType()
@Entity()
export class Profiles {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({
    type: 'enum',
    enum: Status,
    nullable: true,
    default: Status.ACTIVE,
  })
  @Field()
  status: Status;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  display_name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  url: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  registered_on: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  last_login: Date;

  @OneToMany(
    () => ProfilesGroupsRights,
    (profilesGroupsRights) => profilesGroupsRights.profile,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [ProfilesGroupsRights])
  role: ProfilesGroupsRights[];

  @OneToMany(() => MediaRent, (mediaRent) => mediaRent.profile, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn()
  @Field(() => [MediaRent])
  mediaRent: MediaRent[];

  @OneToMany(
    () => MediaFixedReservations,
    (mediaFixedReservations) => mediaFixedReservations.profile,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [MediaFixedReservations])
  mediaFixedReservation: MediaFixedReservations[];

  @OneToMany(() => LibraryRent, (libraryRent) => libraryRent.profile, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn()
  @Field(() => [LibraryRent])
  libraryRent: LibraryRent[];

  @OneToMany(
    () => LibraryReservation,
    (libraryReservation) => libraryReservation.profile,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [LibraryReservation])
  libraryReservation: LibraryReservation[];

  @OneToMany(
    () => BuildingsRoomsReservations,
    (buildingsRoomsReservations) => buildingsRoomsReservations.profile,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [BuildingsRoomsReservations])
  roomReservation: BuildingsRoomsReservations[];

  @OneToMany(
    () => BuildingsFixedReservations,
    (buildingsFixedReservations) => buildingsFixedReservations.profile,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [BuildingsFixedReservations])
  buildingsFixedReservations: BuildingsFixedReservations[];
}
