import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MediaTypes } from 'src/media-types/entities/media-type.entity';
import { Location } from 'src/location/entities/location.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MediaRent } from 'src/media-rent/entities/media-rent.entity';
import { MediaFixedReservations } from 'src/media-fixed-reservations/entities/media-fixed-reservations.entity';

export enum Status {
  YES = 'Y',
  NO = 'N',
}

@ObjectType()
@Entity()
export class Media {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @ManyToOne(() => Location, (location) => location.media, {
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

  @ManyToOne(() => MediaTypes, (mediaTypes) => mediaTypes.media, {
    eager: true,
  })
  @JoinColumn({
    name: 'type_id',
    referencedColumnName: 'id',
  })
  @Field(() => MediaTypes)
  type: MediaTypes;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NO,
    nullable: true,
  })
  @Field({ nullable: true })
  show_home: Status;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  language: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  meta_id: number;

  @OneToMany(() => MediaRent, (mediaRent) => mediaRent.media, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn()
  @Field(() => [MediaRent], { nullable: true })
  rent: MediaRent[];

  @OneToMany(
    () => MediaFixedReservations,
    (mediaFixedReservations) => mediaFixedReservations.media,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [MediaFixedReservations])
  fixedReservation: MediaFixedReservations[];
}
