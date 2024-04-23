import { PartialType } from '@nestjs/mapped-types';
import { CreatePsuApiDto } from './create-psu_api.dto';

export class UpdatePsuApiDto extends PartialType(CreatePsuApiDto) {}
