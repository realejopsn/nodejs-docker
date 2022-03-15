import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { QuotesService } from 'src/services/quotes/quotes.service';

@Module({
  providers: [EntityService, QuotesService],
  controllers: [EntityController],
})
export class EntityModule {}
