import { ObjectType, Field } from '@nestjs/graphql';
import { Media } from 'src/media/entities/media.entity';
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
export class MediaRent {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  rent_from: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
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
  media: Me
}
