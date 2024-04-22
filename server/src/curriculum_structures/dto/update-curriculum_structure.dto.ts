import { PartialType } from '@nestjs/mapped-types';
import { CreateCurriculumStructureDto } from './create-curriculum_structure.dto';

export class UpdateCurriculumStructureDto extends PartialType(CreateCurriculumStructureDto) {}
