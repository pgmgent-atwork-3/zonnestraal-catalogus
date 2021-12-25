import { Module } from '@nestjs/common';
import { BuildingsRoomsService } from './buildings-rooms.service';
import { BuildingsRoomsResolver } from './buildings-rooms.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingsRooms } from './entities/buildings-rooms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingsRooms])],
  providers: [BuildingsRoomsResolver, BuildingsRoomsService],
  exports: [BuildingsRoomsService],
})
export class BuildingsRoomsModule {}
