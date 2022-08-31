import { Injectable } from '@angular/core';
import { URLS, urlsCars } from 'src/urls/urls';
import { Observable } from 'rxjs';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { InterceptorService } from '../Interceptor/interceptor.service';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private interceptorService: InterceptorService
  ) { }

  public getCars(): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('GET', urlsCars.gteCarsUser, {});
  }

  /**
   * AddCar
   */
  public addCar(data): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('POST', urlsCars.createCars, data);
  }
}
