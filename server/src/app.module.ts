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

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './app.sqlite',
    entities: [Student, Course, Category, CurriculumStructure],
    synchronize: process.env.NODE_ENV != 'production',
  }), StudentsModule, CoursesModule, CategoriesModule, CurriculumStructuresModule, SubCategoriesModule],
})
export class AppModule { }
