import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Media } from 'src/media/entities/media.entity';
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
export class MediaRent {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  rent_from: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
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

  @ManyToOne(() => Media, (media) => media.rent, {
    eager: true,
  })
  @JoinColumn({
    name: 'media_id',
    referencedColumnName: 'id',
  })
  @Field(() => Media)
  media: Media;

  @ManyToOne(() => Profiles, (profiles) => profiles.mediaRent, {
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
  media_id: number;
}
