import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './app.sqlite',
    entities: [User],
    synchronize: process.env.NODE_ENV != 'production',
  }), UsersModule, CoursesModule],
})
export class AppModule { }
