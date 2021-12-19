import { ObjectType, Field } from '@nestjs/graphql';

import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class ProfilesGroupsRights {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  starts_on: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  expires_on: Date;
}
