import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

  constructor(@InjectRepository(Course)
  private readonly courseRepository: Repository<Course>
  ) { }

  async create(courseCode: string, totalCredit: string, shortNameEng: string, courseNameEng: string, courseNameThai: string) {
    return { courseCode, totalCredit, shortNameEng, courseNameEng, courseNameThai }

    const newCourse = this.courseRepository.create({
      courseCode: courseCode,
      totalCredit: totalCredit,
      shortNameEng: shortNameEng,
      courseNameEng: courseNameEng,
      courseNameThai: courseNameThai
    })

    return await this.courseRepository.save(newCourse)

  }

  async findAll() {
    return await this.courseRepository.find({ relations: ["category", "subCategory"] });
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
