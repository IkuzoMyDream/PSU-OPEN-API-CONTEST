import { Injectable } from '@nestjs/common';
import { CreateCurriculumStructureDto } from './dto/create-curriculum_structure.dto';
import { UpdateCurriculumStructureDto } from './dto/update-curriculum_structure.dto';

@Injectable()
export class CurriculumStructureService {
  create(createCurriculumStructureDto: CreateCurriculumStructureDto) {
    return 'This action adds a new curriculumStructure';
  }

  findAll() {
    return `This action returns all curriculumStructure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curriculumStructure`;
  }

  update(id: number, updateCurriculumStructureDto: UpdateCurriculumStructureDto) {
    return `This action updates a #${id} curriculumStructure`;
  }

  remove(id: number) {
    return `This action removes a #${id} curriculumStructure`;
  }
}
