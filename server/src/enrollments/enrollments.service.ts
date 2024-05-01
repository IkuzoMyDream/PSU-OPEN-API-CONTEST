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

  async getStudentEnrollment(studentId: Student) {
    return await this.enrollmentRepository
      .createQueryBuilder("enrollment")
      .leftJoinAndSelect("enrollment.courseId", "course")
      .leftJoinAndSelect("course.category", "category")
      .where("enrollment.studentId = :studentId", { studentId: studentId })
      .getMany();
  }

  async getStudentEnrollCreditCurriculum(studentId: Student) {

    const studentEnroll = {
      geEduCourse: {
        registCreditAmount: 0,
        subjGroup01: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        subjGroup02: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        subjGroup03: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        subjGroup04: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        subjGroup05: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        subjGroup06: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        subjGroup07: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        elecEduCourse: {
          registCreditAmount: 0,
          registCourseIds: []
        },
      },
      concentrationCourse: {
        registCreditAmount: 0,
        basicConcen: {
          registCreditAmount: 0,
          registCourseIds: []
        },
        advanceConcen: {
          registCreditAmount: 0,
          registCourseIds: []
        }
      },
      freeElecCourse: {
        registCreditAmount: 0,
        registCourseIds: []
      }
    }

    const enrollments = await this.enrollmentRepository
      .createQueryBuilder("enrollment")
      .leftJoinAndSelect("enrollment.courseId", "course")
      .leftJoinAndSelect("course.category", "category")
      .leftJoinAndSelect("course.subCategory", "sub_category")
      .where("enrollment.studentId = :studentId", { studentId: studentId })
      .getMany();

    enrollments.forEach((enrollment) => {
      // return enrollment
      const course = enrollment?.courseId
      const categoryId = `${course?.category?.categoryId}`
      const subCategoryId = `${course?.subCategory?.subCategoryId}`
      const credit = course?.totalCredit

      switch (categoryId) {
        case "1":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup01.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup01.registCourseIds.push(course.courseCode)
          break
        case "2":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup02.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup02.registCourseIds.push(course.courseCode)
          break
        case "3":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup03.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup03.registCourseIds.push(course.courseCode)
          break
        case "4":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup04.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup04.registCourseIds.push(course.courseCode)
          break
        case "5":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup05.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup05.registCourseIds.push(course.courseCode)
          break
        case "6":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup06.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup06.registCourseIds.push(course.courseCode)
          break
        case "7":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup07.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.subjGroup07.registCourseIds.push(course.courseCode)
          break
        case "8":
          studentEnroll.geEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.elecEduCourse.registCreditAmount += parseInt(credit)
          studentEnroll.geEduCourse.elecEduCourse.registCourseIds.push(course.courseCode)
          break
        case "9":
          studentEnroll.freeElecCourse.registCreditAmount += parseInt(credit)
          studentEnroll.freeElecCourse.registCourseIds.push(course.courseCode)
          break
        case "10":
          studentEnroll.concentrationCourse.registCreditAmount += parseInt(credit)
          switch (subCategoryId) {
            case "1":
              studentEnroll.concentrationCourse.basicConcen.registCreditAmount += parseInt(credit)
              studentEnroll.concentrationCourse.basicConcen.registCourseIds.push(course.courseCode)
              break
            case "8":
              studentEnroll.concentrationCourse.advanceConcen.registCreditAmount += parseInt(credit)
              studentEnroll.concentrationCourse.advanceConcen.registCourseIds.push(course.courseCode)
              break
            default:
              break
          }

          break
        default:
          break
      }
    })

    return studentEnroll

  }

  async findOne(id: Student) {
    return await this.enrollmentRepository.findOne({ where: { studentId: id } });
  }

  update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    return `This action updates a #${id} enrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }

}
