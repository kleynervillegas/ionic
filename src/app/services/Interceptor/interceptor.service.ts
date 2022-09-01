import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URLS, urlsAuthentication } from 'src/urls/urls';
import { LocalStorageService } from '../LocalStorage/local-storage.service';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  public token = localStorage.getItem('token');
  public options = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line quote-props
      'token': this.token,
    }
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private localStorageController: LocalStorageService,
    private toastService: ToastService,
  ) { }

  public httpInterception(
    method: string,
    url: string,
    playload: object
  ): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (url === 'http://localhost:8000/login') ? delete this.options.headers.token : this.options.headers.token = this.token;
    return this.http.request(method, url, { ...this.options, body: playload })
      .pipe(
        map((response) => response),
        catchError((error) => {
          console.log(error);
          if (error.status === 403) {
            this.localStorageController.clearLocalStorage();
            this.router.navigate(['/login']);
            return false;
          }
          return error.error;
        })
      );
  }
}
