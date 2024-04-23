import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCategoriesService } from './sub_categories.service';
import { CreateSubCategoryDto } from './dto/create-sub_category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub_category.dto';

@Controller('local-api')
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Post()
  create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return this.subCategoriesService.create(createSubCategoryDto);
  }

  @Get('sub-categories')
  findAll() {
    return this.subCategoriesService.findAll();
  }

  @Get('sub-category/:id')
  findOne(@Param('id') id: string) {
    return this.subCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.subCategoriesService.update(+id, updateSubCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCategoriesService.remove(+id);
  }
}
