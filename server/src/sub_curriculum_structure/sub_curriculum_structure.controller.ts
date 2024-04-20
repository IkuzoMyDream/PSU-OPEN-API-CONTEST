import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCurriculumStructureService } from './sub_curriculum_structure.service';
import { CreateSubCurriculumStructureDto } from './dto/create-sub_curriculum_structure.dto';
import { UpdateSubCurriculumStructureDto } from './dto/update-sub_curriculum_structure.dto';

@Controller('sub-curriculum-structure')
export class SubCurriculumStructureController {
  constructor(private readonly subCurriculumStructureService: SubCurriculumStructureService) {}

  @Post()
  create(@Body() createSubCurriculumStructureDto: CreateSubCurriculumStructureDto) {
    return this.subCurriculumStructureService.create(createSubCurriculumStructureDto);
  }

  @Get()
  findAll() {
    return this.subCurriculumStructureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCurriculumStructureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubCurriculumStructureDto: UpdateSubCurriculumStructureDto) {
    return this.subCurriculumStructureService.update(+id, updateSubCurriculumStructureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCurriculumStructureService.remove(+id);
  }
}
