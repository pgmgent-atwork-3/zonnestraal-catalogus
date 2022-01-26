import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ProfilesGroupsRightsService } from 'src/profiles-groups-rights/profiles-groups-rights.service';
import { ProfilesService } from 'src/profiles/profiles.service';

@Injectable()
export class AuthService {
  constructor(
    private profilesService: ProfilesService,
    private jwtService: JwtService,
    private profilesGroupsRightsService: ProfilesGroupsRightsService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.profilesService.findOneByEmail(email);
    const match = await bcrypt.compare(pass, user.password);
    if (user && match) {
      const { password, ...result } = user;
      return result;
    }
  throw new HttpException('Wrong Email or Password', HttpStatus.FORBIDDEN);

  }
  async login(user: any) {
    const role = await this.profilesGroupsRightsService.findOne(user.id);
    let isAdmin = false;
    if (role !== undefined) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    const payload = { email: user.email, sub: user.id, isAdmin: isAdmin };

    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }
}
