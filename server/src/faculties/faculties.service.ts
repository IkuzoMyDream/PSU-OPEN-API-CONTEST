import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from './entities/faculty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacultiesService {

  constructor( 
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>
  ) { }

  async create(facId: string, facNameThai: string, facNameEng: string) {
    return { facId, facNameThai, facNameEng }

    const newFaculty = this.facultyRepository.create({
      facId: facId,
      facNameThai: facNameThai,
      facNameEng: facNameEng
    })
    return await this.facultyRepository.save(newFaculty);
  }

  findAll() {
    return `This action returns all faculties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faculty`;
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return `This action updates a #${id} faculty`;
  }

  remove(id: number) {
    return `This action removes a #${id} faculty`;
  }
}
