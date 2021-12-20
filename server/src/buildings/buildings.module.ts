import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsResolver } from './buildings.resolver';
import { Buildings } from './entities/buildings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Buildings])],
  providers: [BuildingsResolver, BuildingsService],
  exports: [BuildingsService],
})
export class BuildingsModule {}
