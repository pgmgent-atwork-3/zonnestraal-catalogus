import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Library } from 'src/library/entities/library.entity';
import { Profiles } from 'src/profiles/entities/profiles.entity';
import {
  Column,
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
export class LibraryRent {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @ManyToOne(() => Library, (library) => library.rent, {
    eager: true,
  })
  @JoinColumn({
    name: 'library_id',
    referencedColumnName: 'id',
  })
  @Field(() => Library)
  library: Library;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  rent_from: Date;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  rent_till: Date;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NO,
    nullable: true,
  })
  @Field({ nullable: true })
  returned: Status;

  @ManyToOne(() => Profiles, (profiles) => profiles.libraryRent, {
    eager: true,
  })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles)
  profile: Profiles;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  profile_id: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  library_id: number;
}
