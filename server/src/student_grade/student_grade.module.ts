import { Module } from '@nestjs/common';
import { StudentGradeService } from './student_grade.service';
import { StudentGradeController } from './student_grade.controller';

@Module({
  controllers: [StudentGradeController],
  providers: [StudentGradeService],
})
export class StudentGradeModule {}
