import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('local-api')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('courses')
  findAll() {
    return this.coursesService.findAll();
  }

  @Get('course/:id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

}
