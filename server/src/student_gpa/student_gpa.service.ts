import { Injectable } from '@nestjs/common';
import { CreateStudentGpaDto } from './dto/create-student_gpa.dto';
import { UpdateStudentGpaDto } from './dto/update-student_gpa.dto';

@Injectable()
export class StudentGpaService {
  create(createStudentGpaDto: CreateStudentGpaDto) {
    return 'This action adds a new studentGpa';
  }

  findAll() {
    return `This action returns all studentGpa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentGpa`;
  }

  update(id: number, updateStudentGpaDto: UpdateStudentGpaDto) {
    return `This action updates a #${id} studentGpa`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentGpa`;
  }
}
