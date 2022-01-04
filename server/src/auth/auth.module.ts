import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JWTStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { ProfilesGroupsRightsModule } from 'src/profiles-groups-rights/profiles-groups-rights.module';

@Module({
  imports: [
    forwardRef(() => ProfilesModule),
    PassportModule,
    ProfilesGroupsRightsModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET'),
        signOptions: { expiresIn: '12h' },
      }),
    }),
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JWTStrategy],
  exports: [AuthService],
})
export class AuthModule {}
