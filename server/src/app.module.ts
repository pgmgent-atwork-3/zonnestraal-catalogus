import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryTypesModule } from './library-types/library-types.module';
import { LibraryModule } from './library/library.module';
import { LocationModule } from './location/location.module';
import { MediaRentModule } from './media-rent/media-rent.module';
import { MediaTypesModule } from './media-types/media-types.module';
import { MediaModule } from './media/media.module';

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
    LibraryTypesModule,
    LocationModule,
    MediaModule,
    MediaTypesModule,
    MediaRentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
