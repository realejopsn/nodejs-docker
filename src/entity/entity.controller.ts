import { Body, Controller, Post } from '@nestjs/common';
import { EntityService } from './entity.service';
import { FilterDto } from './filter.dto';

@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @Post('/filter')
  filter(@Body() filter: FilterDto) {
    return this.entityService.getEntity(filter);
  }
}
