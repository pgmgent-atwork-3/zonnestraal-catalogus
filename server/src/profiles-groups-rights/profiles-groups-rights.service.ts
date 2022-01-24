import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilesGroupsRights } from './entities/profiles-groups-rights.entity';

@Injectable()
export class ProfilesGroupsRightsService {
  constructor(
    @InjectRepository(ProfilesGroupsRights)
    private profilesGroupsRightsRepository: Repository<ProfilesGroupsRights>,
  ) {}

  findOne(id: number) {
    return this.profilesGroupsRightsRepository.findOne({
      where: { profile: id },
    });
  }
}
