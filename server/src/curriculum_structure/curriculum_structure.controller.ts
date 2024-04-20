import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurriculumStructureService } from './curriculum_structure.service';
import { CreateCurriculumStructureDto } from './dto/create-curriculum_structure.dto';
import { UpdateCurriculumStructureDto } from './dto/update-curriculum_structure.dto';

@Controller('curriculum-structure')
export class CurriculumStructureController {
  constructor(private readonly curriculumStructureService: CurriculumStructureService) {}

  @Post()
  create(@Body() createCurriculumStructureDto: CreateCurriculumStructureDto) {
    return this.curriculumStructureService.create(createCurriculumStructureDto);
  }

  @Get()
  findAll() {
    return this.curriculumStructureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curriculumStructureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurriculumStructureDto: UpdateCurriculumStructureDto) {
    return this.curriculumStructureService.update(+id, updateCurriculumStructureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculumStructureService.remove(+id);
  }
}
