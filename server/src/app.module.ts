import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './app.sqlite',
    entities: [],
    synchronize: process.env.NODE_ENV != 'production',
  }), StudentsModule, ],
})
export class AppModule { }
