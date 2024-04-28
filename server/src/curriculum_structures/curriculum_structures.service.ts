import { Injectable } from '@nestjs/common';
import { CreateCurriculumStructureDto } from './dto/create-curriculum_structure.dto';
import { UpdateCurriculumStructureDto } from './dto/update-curriculum_structure.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CurriculumStructure } from './entities/curriculum_structure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurriculumStructuresService {

  constructor(
    @InjectRepository(CurriculumStructure)
    private readonly corriculumStructureRepository: Repository<CurriculumStructure>
  ) { }

  create(createCurriculumStructureDto: CreateCurriculumStructureDto) {
    return 'This action adds a new curriculumStructure';
  }

  async findAll() {
    return await this.corriculumStructureRepository.find();
  }

  async getCurriculumStructureByFacDeptMajor(facId: string, deptId: string, majorId: string, admitYear: string) {
    return await this.corriculumStructureRepository
      .createQueryBuilder('curriculum_structure')
      .leftJoin('curriculum_structure.facId', 'facId')
      .leftJoin('curriculum_structure.deptId', 'deptId')
      .leftJoin('curriculum_structure.majorId', 'majorId')
      .where('curriculum_structure.facId = :facId', { facId })
      .andWhere('curriculum_structure.deptId = :deptId', { deptId })
      .andWhere('curriculum_structure.majorId = :majorId', { majorId })
      .andWhere('curriculum_structure.admitYear = :admitYear', { admitYear })
      .getRawOne()
  }

  async findOne(id: string) {
    return await this.corriculumStructureRepository
      .findOne({ where: { curriculumStructureId: id } })
      ;
  } 


}
