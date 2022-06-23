import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { URLS } from 'src/urls/urls';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { ToastService } from '../toast/toast.service';
import { NotifysService } from '../notifys/notifys.service';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public token = localStorage.getItem('token');
  public options = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'authorization': 'Bearer '+this.token,
    }
  };

  constructor(
    public httpClient: HttpClient,
    private toastService: ToastService,
    private notifysService: NotifysService,
) { }
  /**
   * create
   */
  public create(data): Observable<ResponseDTO> {
    return this.httpClient.post(URLS.created, data, this.options).pipe(
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


    /**
   * update
   */
     public update(data): Observable<ResponseDTO> {
      return this.httpClient.post(URLS.updateProduct, data, this.options).pipe(
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

  /**
   * getAll
   */
  public getAll(): Observable<ResponseDTO>{
    return this.httpClient.get(URLS.getAllProducts,this.options);
  }

  /**
   * getDetailsProduct
   */
  public getDetailsProduct(id): Observable<any>{
    return this.httpClient.get(URLS.getDetailsProduct.replace(':id',id));
  }

  /**
   * editProducto
   */
  public editProducto(item): Observable<ResponseDTO> {
    return this.httpClient.get(URLS.getAllProducts,this.options);
  }

  /**
   * deleteProducto
   */
  public deleteProducto(id): Observable<ResponseDTO> {
   return this.httpClient.delete(URLS.deleteProduct.replace(':id',id),this.options).pipe(
      map((response: ResponseDTO) => {
        if (response.code === 200) {
          return response.code;
        }
        return response.code;
      }),
      catchError(({ error }) => [])
    );
  }
}