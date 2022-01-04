import { ObjectType, Field, Int } from '@nestjs/graphql';
import { LibraryRent } from 'src/library-rent/entities/library-rent.entity';
import { LibraryReservation } from 'src/library-reservation/entities/library-reservation.entity';
import { LibraryTypes } from 'src/library-types/entities/library-types.entity';
import { Location } from 'src/location/entities/location.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  YES = 'Y',
  NO = 'N',
}

@ObjectType()
@Entity()
export class Library {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @PrimaryColumn()
  @Field(() => Int)
  serial: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  publisher: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  author: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  year: number;

  @ManyToOne(() => Location, (location) => location.library, {
    eager: true,
  })
  @JoinColumn({
    name: 'location_id',
    referencedColumnName: 'id',
  })
  @Field(() => Location)
  location: Location;

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

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NO,
    nullable: true,
  })
  @Field({ nullable: true })
  hidden: Status;

  @ManyToOne(() => LibraryTypes, (libraryTypes) => libraryTypes.library, {
    eager: true,
  })
  @JoinColumn({
    name: 'type_id',
    referencedColumnName: 'id',
  })
  @Field(() => LibraryTypes)
  type: LibraryTypes;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  language: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  meta_id: number;

  @OneToMany(() => LibraryRent, (libraryRent) => libraryRent.library, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn()
  @Field(() => [LibraryRent])
  rent: LibraryRent[];

  @OneToMany(
    () => LibraryReservation,
    (libraryReservation) => libraryReservation.library,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [LibraryReservation])
  reservation: LibraryReservation[];
}
