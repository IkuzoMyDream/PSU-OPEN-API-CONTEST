import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('local-api')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get('categories')
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get('category/:id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

}
