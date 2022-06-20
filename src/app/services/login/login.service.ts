import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URLS, urlsAuthentication} from 'src/urls/urls';
import { LocalStorageService } from '../LocalStorage/local-storage.service';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public options = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }
  };

  constructor(
    private http: HttpClient,
    private localStorageController: LocalStorageService,
    private toastService: ToastService,

  ) { }

  /**
   * validateUser
   */
  public validateUser(data): Observable<ResponseDTO> {
    return this.http.post(urlsAuthentication.validateAuthentication, data, this.options).pipe(
      map((response: ResponseDTO) => {
        if (response.code === 200) {
          this.localStorageController.setItem(response.token,response.email);
          this.toastService.toastNotific(response.message);
          return response.code;
        }
        this.toastService.toastNotific(response.message);
        return response.code;
      }),
      catchError(({ error }) => [])
    );
  }

  /**
   * registreUser
data   */
  public registreUser(data): Observable<ResponseDTO> {
    return this.http.post(urlsAuthentication.createUser, data, this.options).pipe(
      map((response: ResponseDTO) => {
        if (response.code === 200) {
          this.toastService.toastNotific(response.message);
          return response.code;
        }
        this.toastService.toastNotific(response.message);
        return response.code;
      }),
      catchError((error) => {
          error.error.forEach(element => {
            this.toastService.toastNotific(element);
          });
        return [];
      })
    );
  }


}
