import { Injectable } from '@nestjs/common';
import { UpdateMajorDto } from './dto/update-major.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from './entities/major.entity';
import { Repository } from 'typeorm';
import { Department } from 'src/departments/entities/department.entity';

@Injectable()
export class MajorsService {

  constructor(
    @InjectRepository(Major)
    private readonly majorRepository: Repository<Major>
  ) { }

  async create(majorId: string, majorNameThai: string, majorNameEng: string, deptId: Department) {
    return { majorId, majorNameThai, majorNameEng, deptId }

    const newMajor = this.majorRepository.create({
      majorId: majorId,
      majorNameThai: majorNameThai,
      majorNameEng: majorNameEng,
      deptId: deptId
    })
    return await this.majorRepository.save(newMajor);

  }

  findAll() {
    return `This action returns all majors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} major`;
  }

  update(id: number, updateMajorDto: UpdateMajorDto) {
    return `This action updates a #${id} major`;
  }

  remove(id: number) {
    return `This action removes a #${id} major`;
  }
}
