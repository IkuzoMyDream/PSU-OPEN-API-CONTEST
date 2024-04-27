import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentGradeService } from './student_grade.service';
import { CreateStudentGradeDto } from './dto/create-student_grade.dto';
import { UpdateStudentGradeDto } from './dto/update-student_grade.dto';

@Controller('student-grade')
export class StudentGradeController {
  constructor(private readonly studentGradeService: StudentGradeService) {}

  @Post()
  create(@Body() createStudentGradeDto: CreateStudentGradeDto) {
    return this.studentGradeService.create(createStudentGradeDto);
  }

  @Get()
  findAll() {
    return this.studentGradeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentGradeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentGradeDto: UpdateStudentGradeDto) {
    return this.studentGradeService.update(+id, updateStudentGradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentGradeService.remove(+id);
  }
}
