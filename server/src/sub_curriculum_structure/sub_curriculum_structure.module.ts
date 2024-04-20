import { Module } from '@nestjs/common';
import { SubCurriculumStructureService } from './sub_curriculum_structure.service';
import { SubCurriculumStructureController } from './sub_curriculum_structure.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCurriculumStructure } from './entities/sub_curriculum_structure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCurriculumStructure])],
  controllers: [SubCurriculumStructureController],
  providers: [SubCurriculumStructureService],
})
export class SubCurriculumStructureModule { }
