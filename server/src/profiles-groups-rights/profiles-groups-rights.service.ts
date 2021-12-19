import { Injectable } from '@nestjs/common';
import { CreateProfilesGroupsRightInput } from './dto/create-profiles-groups-right.input';
import { UpdateProfilesGroupsRightInput } from './dto/update-profiles-groups-right.input';

@Injectable()
export class ProfilesGroupsRightsService {
  create(createProfilesGroupsRightInput: CreateProfilesGroupsRightInput) {
    return 'This action adds a new profilesGroupsRight';
  }

  findAll() {
    return `This action returns all profilesGroupsRights`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profilesGroupsRight`;
  }

  update(id: number, updateProfilesGroupsRightInput: UpdateProfilesGroupsRightInput) {
    return `This action updates a #${id} profilesGroupsRight`;
  }

  remove(id: number) {
    return `This action removes a #${id} profilesGroupsRight`;
  }
}
