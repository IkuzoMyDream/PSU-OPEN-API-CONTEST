import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Student } from 'src/students/entities/student.entity';
import { Course } from 'src/courses/entities/course.entity';

@Controller('local-api')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) { }

  @Post('enrollment')
  create(@Body('studentId') studentId: Student, @Body('courseId') courseId: Course) {
    return this.enrollmentsService.create(studentId, courseId);
  }

  @Get('enrollments')
  findAll() {
    return this.enrollmentsService.findAll();
  }

  @Get('enrollment/:id')
  getStudentEnrollment(@Param('id') id: Student) {
    return this.enrollmentsService.getStudentEnrollCreditCurriculum(id);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.enrollmentsService.update(+id, updateEnrollmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollmentsService.remove(+id);
  }
}
