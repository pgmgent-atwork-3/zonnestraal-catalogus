import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Library } from 'src/library/entities/library.entity';
import { Media } from 'src/media/entities/media.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  YES = 'Y',
  NO = 'N',
}

@ObjectType()
@Entity()
export class Location {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column()
  @Field(() => String)
  language: string;

  @Column()
  @Field(() => Int)
  extra_id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  street: string;

  @Column()
  @Field(() => String)
  number: string;

  @Column()
  @Field(() => String)
  zip: string;

  @Column()
  @Field(() => String)
  city: string;

  @Column()
  @Field(() => String)
  country: string;

  @Column({ nullable: true })
  @Field(() => Float, { nullable: true })
  lat: number;

  @Column({ nullable: true })
  @Field(() => Float, { nullable: true })
  lng: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.YES,
    nullable: true,
  })
  @Field({ nullable: true })
  show_overview: Status;

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

  @OneToMany(() => Media, (media) => media.location)
  @Field(() => [Media])
  media: Media[];

  @OneToMany(() => Library, (library) => library.location)
  @Field(() => [Library])
  library: Library[];
}
