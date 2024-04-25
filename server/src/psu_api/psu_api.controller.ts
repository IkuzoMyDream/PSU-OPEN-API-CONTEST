import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Header, Headers, Head } from '@nestjs/common';
import { PsuApiService } from './psu_api.service';
import { CreatePsuApiDto } from './dto/create-psu_api.dto';
import { UpdatePsuApiDto } from './dto/update-psu_api.dto';

@Controller('psu-api')
export class PsuApiController {
  constructor(private readonly psuApiService: PsuApiService) { }

  @Get("SubjectOffer/:eduTerm/:eduYear")
  async getSubjectOffer(
    @Param('eduTerm') eduTerm: string,
    @Param('eduYear') eduYear: string,) {
    return this.psuApiService.getSubjectOffer(eduTerm, eduYear)
  }

  @Get("level2/StudentDetail/token")
  async getStudentDetail(
    @Headers('token') token: string
  ) {
    return this.psuApiService.getStudentDetail(token)
  }

  @Get("level2/RegistData/token")
  async getRegistData(
    @Headers('token') token: string,
    @Query('eduTerm') eduTerm: string,
    @Query('eduYear') eduYear: string,
  ) {
    return this.psuApiService.getRegistData(token, eduTerm, eduYear)
  }


  @Get("level2/StudentImage/token")
  async getStudentProfileImage(
    @Headers('token') token: string,
  ) {
    return this.psuApiService.getStudentProfileImage(token)
  }

}
