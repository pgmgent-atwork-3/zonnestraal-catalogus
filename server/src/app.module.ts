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
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
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
      namingStrategy: new SnakeNamingStrategy(),
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
    MediaFixedReservationsModule,
    MediaFixedReservationsExceptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
