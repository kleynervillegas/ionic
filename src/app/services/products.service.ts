import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { URLS } from 'src/urls/urls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public options = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    }
  };

  constructor(
    public httpClient: HttpClient
  ) { }
  /**
   * create
   */
  public create(data): Observable<any> {
    return this.httpClient.post(URLS.created, data, this.options);
  }
}
