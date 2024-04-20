import { Injectable } from '@nestjs/common';
import { CreateSubCurriculumStructureDto } from './dto/create-sub_curriculum_structure.dto';
import { UpdateSubCurriculumStructureDto } from './dto/update-sub_curriculum_structure.dto';

@Injectable()
export class SubCurriculumStructureService {
  create(createSubCurriculumStructureDto: CreateSubCurriculumStructureDto) {
    return 'This action adds a new subCurriculumStructure';
  }

  findAll() {
    return `This action returns all subCurriculumStructure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subCurriculumStructure`;
  }

  update(id: number, updateSubCurriculumStructureDto: UpdateSubCurriculumStructureDto) {
    return `This action updates a #${id} subCurriculumStructure`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCurriculumStructure`;
  }
}
