import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category)
  private readonly categoryRepository: Repository<Category>
  ) { }

  async findAll() {
    return await this.categoryRepository.find({ relations: [ "subCategoryIds","courses"] });
  }

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
