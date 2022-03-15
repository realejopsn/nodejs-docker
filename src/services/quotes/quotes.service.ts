import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
  http = new HttpService();

  async getQuote(id) {
    const response = await this.http.get(process.env.BASE_URL +
      process.env.URL_BASE +
      '/entity/v2.1/entities/' +
      id).toPromise();

      if (response.data.message == "") {
        throw new HttpException('Error en validación datos de entrada', HttpStatus.NOT_FOUND);
      }

      return response.data.data;
    
  }
}
