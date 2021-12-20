import { Injectable } from '@nestjs/common';
import { CreateProfilesGroupInput } from './dto/create-profiles-group.input';
import { UpdateProfilesGroupInput } from './dto/update-profiles-group.input';

@Injectable()
export class ProfilesGroupsService {
  create(createProfilesGroupInput: CreateProfilesGroupInput) {
    return 'This action adds a new profilesGroup';
  }

  findAll() {
    return `This action returns all profilesGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profilesGroup`;
  }

  update(id: number, updateProfilesGroupInput: UpdateProfilesGroupInput) {
    return `This action updates a #${id} profilesGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} profilesGroup`;
  }
}
