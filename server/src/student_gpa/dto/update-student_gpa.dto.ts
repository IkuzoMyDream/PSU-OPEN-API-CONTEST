import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentGpaDto } from './create-student_gpa.dto';

export class UpdateStudentGpaDto extends PartialType(CreateStudentGpaDto) {}
