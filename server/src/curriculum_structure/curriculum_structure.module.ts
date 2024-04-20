import { Module } from '@nestjs/common';
import { CurriculumStructureService } from './curriculum_structure.service';
import { CurriculumStructureController } from './curriculum_structure.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculumStructure } from './entities/curriculum_structure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CurriculumStructure])],
  controllers: [CurriculumStructureController],
  providers: [CurriculumStructureService],
})
export class CurriculumStructureModule { }
