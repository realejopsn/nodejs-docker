import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { QuotesService } from 'src/services/quotes/quotes.service';

@Injectable()
export class EntityService {
  constructor(private quotesService: QuotesService) {}

  async getEntity(filter) {
    if (filter.startId > filter.endId) {
      throw new HttpException('Error en validación datos de entrada', HttpStatus.NOT_FOUND);
    }
    let entity = [];
    for (let index = filter.startId; index <= filter.endId; index++) {
      entity.push(await this.quotesService.getQuote(index));
    }
    
    entity.sort((oldRelease, newRelease) => {
      const compareName = oldRelease.name.localeCompare(newRelease.name);
    
      return compareName;
    })
    
    return entity
  }
}
