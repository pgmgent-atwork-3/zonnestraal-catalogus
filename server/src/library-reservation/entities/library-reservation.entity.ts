import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Library } from 'src/library/entities/library.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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
}
