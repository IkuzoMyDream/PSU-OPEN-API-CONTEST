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

  async create(createCourseDto: CreateCourseDto) {
    return await 'This action adds a new course';
  }

  async findAll() {
    return await this.courseRepository.find({ relations: ["category", "subCurriculumStructure"] });
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
