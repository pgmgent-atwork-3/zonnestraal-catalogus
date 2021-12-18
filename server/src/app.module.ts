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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'zonnestr',
      entities: ['dist/**/*.entity{.ts,.js}', __dirname + '/entities/**/*.js'],
      synchronize: false,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    LibraryModule,
    LibraryReservationModule,
    LibraryTypesModule,
    LocationModule,
    MediaModule,
    MediaTypesModule,
    MediaRentModule,
    LibraryRentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
