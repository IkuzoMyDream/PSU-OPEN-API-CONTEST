import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../app.sqlite',
    entities: [Book],
    synchronize: process.env.NODE_ENV != 'production',
  }), BooksModule],
})
export class AppModule { }
