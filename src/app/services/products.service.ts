import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { URLS } from 'src/urls/urls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public token = localStorage.getItem('token');
  public options = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'authorization': 'Bearer'+this.token,
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

  /**
   * getAll
   */
  public getAll(): Observable<any>{
    console.log(this.token);
    return this.httpClient.get(URLS.getAllProducts);
  }

  /**
   * getDetailsProduct
   */
  public getDetailsProduct(id): Observable<any>{
    return this.httpClient.get(URLS.getDetailsProduct.replace(':id',id));
  }
}
