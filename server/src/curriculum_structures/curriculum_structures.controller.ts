import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurriculumStructuresService } from './curriculum_structures.service';
import { CreateCurriculumStructureDto } from './dto/create-curriculum_structure.dto';
import { UpdateCurriculumStructureDto } from './dto/update-curriculum_structure.dto';

@Controller('curriculum-structures')
export class CurriculumStructuresController {
  constructor(private readonly curriculumStructuresService: CurriculumStructuresService) {}

  @Post()
  create(@Body() createCurriculumStructureDto: CreateCurriculumStructureDto) {
    return this.curriculumStructuresService.create(createCurriculumStructureDto);
  }

  @Get()
  findAll() {
    return this.curriculumStructuresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curriculumStructuresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurriculumStructureDto: UpdateCurriculumStructureDto) {
    return this.curriculumStructuresService.update(+id, updateCurriculumStructureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculumStructuresService.remove(+id);
  }
}
