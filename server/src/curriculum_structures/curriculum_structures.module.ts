import { Module } from '@nestjs/common';
import { CurriculumStructuresService } from './curriculum_structures.service';
import { CurriculumStructuresController } from './curriculum_structures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculumStructure } from './entities/curriculum_structure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CurriculumStructure])],
  controllers: [CurriculumStructuresController],
  providers: [CurriculumStructuresService],
})
export class CurriculumStructuresModule { }
