import { ObjectType, Field } from '@nestjs/graphql';
import { LibraryReservationDate } from 'src/library-reservation-date/entities/library-reservation-date.entity';
import { Library } from 'src/library/entities/library.entity';
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
  YES = 'Y',
  NO = 'N',
}
@ObjectType()
@Entity()
export class LibraryReservation {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(() => Library, (library) => library.reservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'library_id',
    referencedColumnName: 'id',
  })
  @Field(() => Library)
  library: Library;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NO,
    nullable: true,
  })
  @Field({ nullable: true })
  deleted: Status;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;

  @ManyToOne(() => Profiles, (profiles) => profiles.libraryReservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles)
  profile: Profiles;

  @OneToMany(
    () => LibraryReservationDate,
    (libraryReservationDate) => libraryReservationDate.reservationTerm,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [LibraryReservationDate])
  term: LibraryReservationDate[];
}
