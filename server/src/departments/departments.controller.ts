import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('local-api')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get('departments')
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get('department/:id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

}
