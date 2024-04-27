import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentGradeDto } from './create-student_grade.dto';

export class UpdateStudentGradeDto extends PartialType(CreateStudentGradeDto) {}
