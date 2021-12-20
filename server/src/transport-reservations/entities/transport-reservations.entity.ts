import { ObjectType, Field } from '@nestjs/graphql';
import { Profiles } from 'src/profiles/entities/profiles.entity';
import { Transport } from 'src/transport/entities/transport.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class TransportReservations {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  from: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  till: Date;

  @ManyToOne(() => Profiles, (profiles) => profiles.transportReservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
  })
  @Field(() => Profiles)
  profile: Profiles;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Field({ nullable: true })
  created_on: Date;

  @UpdateDateColumn({
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field({ nullable: true })
  edited_on: Date;

  @ManyToOne(() => Transport, (transport) => transport.reservation, {
    eager: true,
  })
  @JoinColumn({
    name: 'transport_id',
    referencedColumnName: 'id',
  })
  @Field(() => Transport)
  transport: Transport;
}
