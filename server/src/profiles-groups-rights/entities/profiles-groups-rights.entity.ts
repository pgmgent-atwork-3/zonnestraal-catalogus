import { ObjectType, Field } from '@nestjs/graphql';
import { ProfilesGroups } from 'src/profiles-groups/entities/profiles-groups.entity';
import { Profiles } from 'src/profiles/entities/profiles.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class ProfilesGroupsRights {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @ManyToOne(() => Profiles, (profiles) => profiles.role, { eager: true })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles)
  profile: Profiles;

  @ManyToOne(() => ProfilesGroups, (profilesGroups) => profilesGroups.role, {
    eager: true,
  })
  @JoinColumn({
    name: 'group_id',
    referencedColumnName: 'id',
  })
  @Field(() => ProfilesGroups)
  group: ProfilesGroups;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  starts_on: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  expires_on: Date;
}
