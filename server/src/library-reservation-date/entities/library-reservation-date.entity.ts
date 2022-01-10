import { ObjectType, Field } from '@nestjs/graphql';
import { LibraryReservation } from 'src/library-reservation/entities/library-reservation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class LibraryReservationDate {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  from_date: Date;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  till_date: Date;

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
    nullable: true,
  })
  @Field({ nullable: true })
  library_reservation_id: number;

  @OneToOne(
    () => LibraryReservation,
    (libraryReservation) => libraryReservation,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn({
    name: 'library_reservation_id',
    referencedColumnName: 'id',
  })
  @Field(() => LibraryReservation)
  library_reservation: LibraryReservation;
}
