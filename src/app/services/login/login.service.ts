import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URLS, URLSAuthentication } from 'src/urls/urls';
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
    return this.http.post(URLSAuthentication.validateAuthentication, data, this.options).pipe(
      map((response: ResponseDTO) => {
        if (response.code === 200) {
          this.localStorageController.setItem(response.token);
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
    console.log(URLSAuthentication.validateAuthentication);
    return this.http.post(URLSAuthentication.CreateUser, data, this.options).pipe(
      map((response: ResponseDTO) => {
        console.log(response);
        console.log(response);
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
