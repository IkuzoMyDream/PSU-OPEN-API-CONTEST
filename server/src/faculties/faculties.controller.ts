import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Controller('local-api')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) { }

  @Post('faculty')
  create(
    @Body(`facId`) facId: string,
    @Body(`facNameThai`) facNameThai: string,
    @Body(`facNameEng`) facNameEng: string) {
    return this.facultiesService.create(facId, facNameThai, facNameEng);
  }

  @Get('faculties')
  findAll() {
    return this.facultiesService.findAll();
  }

  @Get('faculty/:id')
  findOne(@Param('id') id: string) {
    return this.facultiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
    return this.facultiesService.update(+id, updateFacultyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facultiesService.remove(+id);
  }
}
