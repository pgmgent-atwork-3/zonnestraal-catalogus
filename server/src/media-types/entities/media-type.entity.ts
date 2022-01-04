import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Media } from 'src/media/entities/media.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class MediaTypes {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

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

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  language: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  meta_id: number;

  @OneToMany(() => Media, (media) => media.type)
  @Field(() => [Media])
  media: Media[];
}
