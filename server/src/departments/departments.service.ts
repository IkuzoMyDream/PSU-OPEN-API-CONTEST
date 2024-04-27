import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
 
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>
  ) { }

  async create(deptId: string, deptNameThai: string, deptNameEng: string, facId: Faculty) {
    // return { deptId, deptNameThai, deptNameEng, facId }

    const newDepartment = this.departmentRepository.create({
      deptId: deptId,
      deptNameThai: deptNameThai,
      deptNameEng: deptNameEng,
      facId: facId
    })

    return await this.departmentRepository.save(newDepartment);
  }

  findAll() {
    return `This action returns all departments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
