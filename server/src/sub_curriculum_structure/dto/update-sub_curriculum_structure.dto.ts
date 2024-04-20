import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCurriculumStructureDto } from './create-sub_curriculum_structure.dto';

export class UpdateSubCurriculumStructureDto extends PartialType(CreateSubCurriculumStructureDto) {}
