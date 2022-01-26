import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileInput } from './dto/create-profile.input';
import { Profiles } from './entities/profiles.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profiles)
    private profileRepository: Repository<Profiles>,
  ) {}
  async create(createProfileInput: CreateProfileInput): Promise<Profiles> {
    const profile = this.profileRepository.create(createProfileInput);
    const salt = await bcrypt.genSalt();
    profile.password = await bcrypt.hash(createProfileInput.password, salt);
    return this.profileRepository.save(profile);
  }

  findAll(): Promise<Profiles[]> {
    return this.profileRepository.find({ relations: ['role'] });
  }

  findOneByEmail(email: string) {
    return this.profileRepository.findOne({ where: { email: email } });
  }
}
