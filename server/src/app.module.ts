import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { Student } from './students/entities/student.entity';
import { Course } from './courses/entities/course.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { CurriculumStructureModule } from './curriculum_structure/curriculum_structure.module';
import { SubCurriculumStructureModule } from './sub_curriculum_structure/sub_curriculum_structure.module';
import { CurriculumStructure } from './curriculum_structure/entities/curriculum_structure.entity';
import { SubCurriculumStructure } from './sub_curriculum_structure/entities/sub_curriculum_structure.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './app.sqlite',
    entities: [Student, Course, Category, CurriculumStructure, SubCurriculumStructure],
    synchronize: process.env.NODE_ENV != 'production',
  }), StudentsModule, CoursesModule, CategoriesModule, CurriculumStructureModule, SubCurriculumStructureModule],
})
export class AppModule { }
