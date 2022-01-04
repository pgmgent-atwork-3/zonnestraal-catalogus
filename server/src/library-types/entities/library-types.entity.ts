import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Library } from 'src/library/entities/library.entity';
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
export class LibraryTypes {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  language: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  created_on: Date;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  meta_id: number;

  @UpdateDateColumn({
    type: 'timestamptz',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  edited_on: Date;

  @OneToMany(() => Library, (library) => library.type)
  @Field(() => [Library])
  library: Library[];
}
