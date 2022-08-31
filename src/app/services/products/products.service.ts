import { Injectable } from '@angular/core';
import { URLS } from 'src/urls/urls';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResponseDTO } from 'src/shared/dtos/responseDto';
import { InterceptorService } from '../Interceptor/interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private interceptorService: InterceptorService
  ) { }
  /**
   * create
   */
  public create(data): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('POST', URLS.created, data);
  }


  /**
 * update
 */
  public update(data): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('POST', URLS.updateProduct, data);
  }

  /**
   * getAll
   */
  public getAll(): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('GET', URLS.getAllProducts, {});
  }

  /**
   * getDetailsProduct
   */
  public getDetailsProduct(id): Observable<any> {
    return this.interceptorService.httpInterception('GET', URLS.getDetailsProduct.replace(':id', id), {});
  }

  /**
   * editProducto
   */
  public editProducto(item): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('GET', URLS.getAllProducts, {});
  }

  /**
   * deleteProducto
   */
  public deleteProducto(id): Observable<ResponseDTO> {
    return this.interceptorService.httpInterception('DELETE', URLS.deleteProduct.replace(':id', id), {});

  }
}
