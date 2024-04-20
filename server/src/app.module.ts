import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { Student } from './students/entities/student.entity';
import { Course } from './courses/entities/course.entity';
import { FreeElectiveEducationsModule } from './free_elective_educations/free_elective_educations.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './app.sqlite',
    entities: [Student, Course],
    synchronize: process.env.NODE_ENV != 'production',
  }), StudentsModule, CoursesModule, FreeElectiveEducationsModule, CategoriesModule,],
})
export class AppModule { }
