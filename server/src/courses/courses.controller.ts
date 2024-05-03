import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('local-api')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post('course')
  create(
    @Body('courseCode') courseCode: string,
    @Body('totalCredit') totalCredit: string,
    @Body('shortNameEng') shortNameEng: string,
    @Body('courseNameEng') courseNameEng: string,
    @Body('courseNameThai') courseNameThai: string) {
    return this.coursesService.create(courseCode, totalCredit, shortNameEng, courseNameEng, courseNameThai)
  }
 
  @Get('courses')
  findAll() {
    return this.coursesService.findAll();
  } 

  @Get('course/:id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }
  @Get('course-code/:courseCode')
  findOneByCourseCode(@Param('courseCode') courseCode: string) {
    return this.coursesService.findOneByCourseCode(courseCode);
  }

}
