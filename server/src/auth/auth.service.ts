import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ProfilesService } from 'src/profiles/profiles.service';

@Injectable()
export class AuthService {
  constructor(
    private profilesService: ProfilesService,
    private jwtService: JwtService,
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
    const payload = { email: user.email, sub: user.id };

    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }
}
