import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) { }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const bookEntity = this.bookRepository.create(createBookDto)
    return await this.bookRepository.save(bookEntity);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
