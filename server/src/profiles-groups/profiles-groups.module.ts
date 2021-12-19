import { Module } from '@nestjs/common';
import { ProfilesGroupsService } from './profiles-groups.service';
import { ProfilesGroupsResolver } from './profiles-groups.resolver';
import { ProfilesGroups } from './entities/profiles-groups.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilesGroups])],
  providers: [ProfilesGroupsResolver, ProfilesGroupsService],
  exports: [ProfilesGroupsService],
})
export class ProfilesGroupsModule {}
