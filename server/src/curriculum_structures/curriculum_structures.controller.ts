import { Controller, Get, Param, } from '@nestjs/common';
import { CurriculumStructuresService } from './curriculum_structures.service';


@Controller('local-api')
export class CurriculumStructuresController {
  constructor(private readonly curriculumStructuresService: CurriculumStructuresService) { }

  @Get('curriculum-structures')
  findAll() {
    return this.curriculumStructuresService.findAll();
  }

  @Get('curriculum-structure/:id')
  findOne(@Param('id') id: string) {
    return this.curriculumStructuresService.findOne(id);
  }

  @Get('curriculum-structure/:facId/:deptId/:majorId/:admitYear')
  getCurriculumStructureByFacDeptMajor(
    @Param('facId') facId: string,
    @Param('deptId') deptId: string,
    @Param('majorId') majorId: string,
    @Param('admitYear') admitYear: string,
  ) {
    return this.curriculumStructuresService.getCurriculumStructureByFacDeptMajor(facId, deptId, majorId, admitYear)
  }


}
