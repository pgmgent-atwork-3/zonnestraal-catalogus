import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryReservationModule } from './library-reservation/library-reservation.module';
import { LibraryTypesModule } from './library-types/library-types.module';
import { LibraryModule } from './library/library.module';
import { LocationModule } from './location/location.module';
import { MediaRentModule } from './media-rent/media-rent.module';
import { MediaTypesModule } from './media-types/media-types.module';
import { MediaModule } from './media/media.module';
import { LibraryRentModule } from './library-rent/library-rent.module';
import { MediaFixedReservationsModule } from './media-fixed-reservations/media-fixed-reservations.module';
import { MediaFixedReservationsExceptionsModule } from './media-fixed-reservations-exceptions/media-fixed-reservations-exceptions.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfilesGroupsModule } from './profiles-groups/profiles-groups.module';
import { ProfilesGroupsRightsModule } from './profiles-groups-rights/profiles-groups-rights.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { DatabaseConfig } from './database.config';
import { BuildingsModule } from './buildings/buildings.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      context: ({ req }) => ({ headers: req.headers }),
    }),
    LibraryModule,
    LibraryReservationModule,
    LibraryTypesModule,
    LocationModule,
    MediaModule,
    MediaTypesModule,
    MediaRentModule,
    LibraryRentModule,
    MediaFixedReservationsModule,
    MediaFixedReservationsExceptionsModule,
    ProfilesModule,
    ProfilesGroupsModule,
    ProfilesGroupsRightsModule,
    BuildingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
