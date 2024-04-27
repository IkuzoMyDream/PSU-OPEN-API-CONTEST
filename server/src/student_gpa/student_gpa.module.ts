import { Module } from '@nestjs/common';
import { StudentGpaService } from './student_gpa.service';
import { StudentGpaController } from './student_gpa.controller';

@Module({
  controllers: [StudentGpaController],
  providers: [StudentGpaService],
})
export class StudentGpaModule {}
