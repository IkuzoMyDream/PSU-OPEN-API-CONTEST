import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from './entities/enrollment.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Course } from 'src/courses/entities/course.entity';
 
@Injectable()
export class EnrollmentsService {

  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>
  ) { }

  async create(studentId: Student, courseId: Course) {
    return { studentId, courseId }
    const newEnrollment = this.enrollmentRepository.create({
      studentId: studentId,
      courseId: courseId
    })
    return await this.enrollmentRepository.save(newEnrollment);
  }

  findAll() {
    return `This action returns all enrollments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollment`;
  }

  update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    return `This action updates a #${id} enrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}
