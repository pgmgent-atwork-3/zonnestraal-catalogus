import { ObjectType, Field } from '@nestjs/graphql';
import { ProfilesGroupsRights } from 'src/profiles-groups-rights/entities/profiles-groups-rights.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
  BLOCKED = 'blocked',
}

@ObjectType()
@Entity()
export class Profiles {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({
    type: 'enum',
    enum: Status,
    nullable: true,
    default: Status.ACTIVE,
  })
  @Field()
  status: Status;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  display_name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  url: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  registered_on: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  last_login: Date;

  @OneToMany(
    () => ProfilesGroupsRights,
    (profilesGroupsRights) => profilesGroupsRights.profile,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  @Field(() => [ProfilesGroupsRights])
  role: ProfilesGroupsRights[];
}
