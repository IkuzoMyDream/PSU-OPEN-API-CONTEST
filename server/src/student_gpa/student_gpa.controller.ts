import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentGpaService } from './student_gpa.service';
import { CreateStudentGpaDto } from './dto/create-student_gpa.dto';
import { UpdateStudentGpaDto } from './dto/update-student_gpa.dto';

@Controller('student-gpa')
export class StudentGpaController {
  constructor(private readonly studentGpaService: StudentGpaService) {}

  @Post()
  create(@Body() createStudentGpaDto: CreateStudentGpaDto) {
    return this.studentGpaService.create(createStudentGpaDto);
  }

  @Get()
  findAll() {
    return this.studentGpaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentGpaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentGpaDto: UpdateStudentGpaDto) {
    return this.studentGpaService.update(+id, updateStudentGpaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentGpaService.remove(+id);
  }
}
