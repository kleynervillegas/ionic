import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS ,URLSNOTIFIC} from 'src/urls/urls';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public token = localStorage.getItem('token');
  public options = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.token,
    }
  };

  constructor(
    private httpClient: HttpClient,
    private toastService: ToastService,
  ) { }

  public getCities(): Observable<any> {
    return this.httpClient
      .get('assets/files/json/cities.json')
      .pipe(
        map((res: any) => res.data));
  }

  /**
   * AddCar
   */
  public addCar(id): Observable<ResponseDTO> {
    return this.httpClient.get(URLSNOTIFIC.CreateNotific.replace(':id',id),this.options).pipe(
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