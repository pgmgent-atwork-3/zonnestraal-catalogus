import { ObjectType, Field } from '@nestjs/graphql';
import { Buildings } from 'src/buildings/entities/buildings.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class BuildingsRooms {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

  @ManyToOne(() => Buildings, (buildings) => buildings.room, {
    eager: true,
  })
  @JoinColumn({
    name: 'building_id',
    referencedColumnName: 'id',
  })
  @Field(() => Buildings)
  building: Buildings;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  color_calendar: string;
}
