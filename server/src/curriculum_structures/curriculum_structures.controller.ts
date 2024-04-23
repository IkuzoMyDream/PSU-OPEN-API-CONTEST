import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurriculumStructuresService } from './curriculum_structures.service';
import { CreateCurriculumStructureDto } from './dto/create-curriculum_structure.dto';
import { UpdateCurriculumStructureDto } from './dto/update-curriculum_structure.dto';

@Controller('local-api')
export class CurriculumStructuresController {
  constructor(private readonly curriculumStructuresService: CurriculumStructuresService) {}

  @Get('curriculum-structures')
  findAll() {
    return this.curriculumStructuresService.findAll();
  }

  @Get('curriculum-structure/:id')
  findOne(@Param('id') id: string) {
    return this.curriculumStructuresService.findOne(+id);
  }

}
