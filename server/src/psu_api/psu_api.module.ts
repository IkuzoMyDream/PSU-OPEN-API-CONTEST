import { Module } from '@nestjs/common';
import { PsuApiService } from './psu_api.service';
import { PsuApiController } from './psu_api.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PsuApiController],
  providers: [PsuApiService],
})
export class PsuApiModule { }
