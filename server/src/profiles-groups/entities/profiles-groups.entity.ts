import { ObjectType, Field } from '@nestjs/graphql';
import { ProfilesGroupsRights } from 'src/profiles-groups-rights/entities/profiles-groups-rights.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class ProfilesGroups {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @OneToMany(
    () => ProfilesGroupsRights,
    (profilesGroupsRights) => profilesGroupsRights.group,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [ProfilesGroupsRights])
  role: ProfilesGroupsRights[];
}
