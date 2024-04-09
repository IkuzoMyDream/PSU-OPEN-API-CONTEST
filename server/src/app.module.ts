import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './app.sqlite',
    entities: [Book],
    synchronize: process.env.NODE_ENV != 'production',
  }), BooksModule, UsersModule, PostsModule, CommentsModule],
})
export class AppModule { }
