import { Module } from '@nestjs/common';
import { ProfilesGroupsRightsService } from './profiles-groups-rights.service';
import { ProfilesGroupsRightsResolver } from './profiles-groups-rights.resolver';
import { ProfilesGroupsRights } from './entities/profiles-groups-rights.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilesGroupsRights])],
  providers: [ProfilesGroupsRightsResolver, ProfilesGroupsRightsService],
  exports: [ProfilesGroupsRightsService],
})
export class ProfilesGroupsRightsModule {}
