import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Faculty } from 'src/faculties/entities/faculty.entity';

@Controller('local-api')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }

  @Post('department')
  create(
    @Body('deptId') deptId: string,
    @Body('deptNameThai') deptNameThai: string,
    @Body('deptNameEng') deptNameEng: string,
    @Body('facId') facId: Faculty,
  ) { 
    return this.departmentsService.create(deptId, deptNameThai, deptNameEng, facId)
  }

  @Get('departments')
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get('department/:id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

}
