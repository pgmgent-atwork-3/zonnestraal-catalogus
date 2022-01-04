import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BuildingsRooms } from 'src/buildings-rooms/entities/buildings-rooms.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Buildings {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @OneToMany(
    () => BuildingsRooms,
    (buildingsRooms) => buildingsRooms.building,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [BuildingsRooms])
  room: BuildingsRooms[];

  @Column()
  @Field(() => String)
  language: string;

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
  @Field(() => Int, { nullable: true })
  meta_id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @Field({ nullable: true })
  edited_on: Date;
}
