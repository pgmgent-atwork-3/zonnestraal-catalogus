import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class MediaFixedReservationsExceptions {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;
}
