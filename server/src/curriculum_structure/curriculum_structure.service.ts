import { Injectable } from '@nestjs/common';
import { CreateCurriculumStructureDto } from './dto/create-curriculum_structure.dto';
import { UpdateCurriculumStructureDto } from './dto/update-curriculum_structure.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CurriculumStructure } from './entities/curriculum_structure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurriculumStructureService {

  constructor(
    @InjectRepository(CurriculumStructure)
    private readonly curriculumStructureRepository: Repository<CurriculumStructure>
  ) { }

  create(createCurriculumStructureDto: CreateCurriculumStructureDto) {
    return 'This action adds a new curriculumStructure';
  }

  async findAll() {
    return await this.curriculumStructureRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} curriculumStructure`;
  }

  update(id: number, updateCurriculumStructureDto: UpdateCurriculumStructureDto) {
    return `This action updates a #${id} curriculumStructure`;
  }

  remove(id: number) {
    return `This action removes a #${id} curriculumStructure`;
  }
}
