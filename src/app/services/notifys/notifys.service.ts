import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { urlsNotify } from 'src/urls/urls';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { InterceptorService } from '../Interceptor/interceptor.service';



@Injectable({
  providedIn: 'root'
})
export class NotifysService {

  constructor(
    private interceptorService: InterceptorService
  ) { }

  /**
   * create
   */
  public create(data) {
    return this.interceptorService.httpInterception('POST', urlsNotify.createNotify, data);
  }

  /**
   * getNotificUser
   */
  public getNotifyUser(): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('GET', urlsNotify.getNotifyUser, {});
  }
}
