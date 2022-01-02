import { ObjectType, Field } from '@nestjs/graphql';
import { LibraryReservation } from 'src/library-reservation/entities/library-reservation.entity';
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
export class LibraryReservationDate {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(
    () => LibraryReservation,
    (libraryReservation) => libraryReservation.term,
    { nullable: true },
  )
  @JoinColumn({
    name: 'library_reservation_id',
    referencedColumnName: 'id',
  })
  @Field(() => LibraryReservation, { nullable: true })
  reservationTerm: LibraryReservation;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  from: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  till: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
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
}
