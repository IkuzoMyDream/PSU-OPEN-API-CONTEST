import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Department } from 'src/departments/entities/department.entity';

@Controller('local-api')
export class MajorsController {
  constructor(private readonly majorsService: MajorsService) { }
 
  @Post('major')
  create(
    @Body('majorId') majorId: string,
    @Body('majorNameThai') majorNameThai: string,
    @Body('majorNameEng') majorNameEng: string,
    @Body('deptId') deptId: Department,) {
    return this.majorsService.create(majorId, majorNameThai, majorNameEng, deptId);
  }

  @Get('majors')
  findAll() {
    return this.majorsService.findAll();
  }

  @Get('major/:id')
  findOne(@Param('id') id: string) {
    return this.majorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMajorDto: UpdateMajorDto) {
    return this.majorsService.update(+id, updateMajorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.majorsService.remove(+id);
  }
}
