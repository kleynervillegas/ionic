import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URLS, urlsAuthentication } from 'src/urls/urls';
import { LocalStorageService } from '../LocalStorage/local-storage.service';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { ToastService } from '../toast/toast.service';
import { InterceptorService } from '../Interceptor/interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private localStorageController: LocalStorageService,
    private toastService: ToastService,
    private interceptorService: InterceptorService

  ) { }

  /**
   * validateUser
   */
  public validateUser(playload): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('POST', urlsAuthentication.validateAuthentication, playload,true);
  }

  /**
   * registreUser
data   */
  public registreUser(data): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('POST', urlsAuthentication.createUser, data);
  }
}
