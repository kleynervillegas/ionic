import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS, urlsCars } from 'src/urls/urls';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { ToastService } from '../toast/toast.service';
import { NotifysService } from '../notifys/notifys.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
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
    private httpClient: HttpClient,
    private toastService: ToastService,
    private notifysService: NotifysService,
  ) { }

  public getCars(): Observable<ResponseDTO> {
    return this.httpClient.get(urlsCars.gteCarsUser, this.options);
  }

  /**
   * AddCar
   */
  public addCar(data): Observable<ResponseDTO> {
    return this.httpClient.post(urlsCars.createCars, data, this.options);
  }
}
