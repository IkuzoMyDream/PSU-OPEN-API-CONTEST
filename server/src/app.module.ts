import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { Student } from './students/entities/student.entity';
import { Course } from './courses/entities/course.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { CurriculumStructuresModule } from './curriculum_structures/curriculum_structures.module';
import { CurriculumStructure } from './curriculum_structures/entities/curriculum_structure.entity';
import { SubCategoriesModule } from './sub_categories/sub_categories.module';
import { SubCategory } from './sub_categories/entities/sub_category.entity';
import { FacultiesModule } from './faculties/faculties.module';
import { MajorsModule } from './majors/majors.module';
import { DepartmentsModule } from './departments/departments.module';
import { Faculty } from './faculties/entities/faculty.entity';
import { Department } from './departments/entities/department.entity';
import { Major } from './majors/entities/major.entity';
import { Enrollment } from './enrollments/entities/enrollment.entity';
import { PsuApiModule } from './psu_api/psu_api.module';
import { ConfigModule } from '@nestjs/config';
import { StudentGpaModule } from './student_gpa/student_gpa.module';
import { StudentGradeModule } from './student_grade/student_grade.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [Student, Enrollment, Faculty, Department, Major, Course, CurriculumStructure, Category, SubCategory],
      synchronize: process.env.NODE_ENV != 'production',
    }), StudentsModule, CoursesModule, CategoriesModule, CurriculumStructuresModule, SubCategoriesModule, FacultiesModule, MajorsModule, DepartmentsModule, PsuApiModule, StudentGpaModule, StudentGradeModule, EnrollmentsModule],
})
export class AppModule { }
