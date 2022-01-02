import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfilesGroupsRightInput } from './dto/create-profiles-groups-right.input';
import { UpdateProfilesGroupsRightInput } from './dto/update-profiles-groups-right.input';
import { ProfilesGroupsRights } from './entities/profiles-groups-rights.entity';

@Injectable()
export class ProfilesGroupsRightsService {
  constructor(
    @InjectRepository(ProfilesGroupsRights)
    private profilesGroupsRightsRepository: Repository<ProfilesGroupsRights>,
  ) {}
  create(createProfilesGroupsRightInput: CreateProfilesGroupsRightInput) {
    return 'This action adds a new profilesGroupsRight';
  }

  findAll() {
    return null;
  }

  findOne(id: number) {
    return this.profilesGroupsRightsRepository.findOne({
      where: { profile: id },
    });
  }

  update(
    id: number,
    updateProfilesGroupsRightInput: UpdateProfilesGroupsRightInput,
  ) {
    return `This action updates a #${id} profilesGroupsRight`;
  }

  remove(id: number) {
    return `This action removes a #${id} profilesGroupsRight`;
  }
}
