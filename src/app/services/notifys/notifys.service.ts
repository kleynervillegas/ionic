import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URLS, urlsNotify } from 'src/urls/urls';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class NotifysService {
  public token = localStorage.getItem('token');
  public options = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token,
    }
  };

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
  ) { }

  /**
   * create
   */
  public create(description:string,origin:string,sendUser:boolean) {
    return this.http.post(urlsNotify.createNotify, {description:description,origin:origin,sendUser:sendUser}, this.options).pipe(
      map((response: ResponseDTO) => {
        if (response.code === 200) {
          this.toastService.toastNotific(response.message);
          return response.code;
        }
        this.toastService.toastNotific(response.message);
        return response.code;
      }),
      catchError(({ error }) => [])
    );
  }
}
