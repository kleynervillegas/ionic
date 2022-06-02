import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResponseDTO } from 'src/shared/dtos/responseDto';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient,
    ) { }

  public getCities(): Observable<any> {
    return this.http
    .get('assets/files/json/cities.json')
    .pipe(
      map((res: any) => res.data));
  }

  /**
   * AddCar
   */
  public addCar(producto: object): Observable<ResponseDTO> {
      console.log(producto);
      return this.http
      .get('assets/files/json/cities.json')
      .pipe(
        map((res: any) => res.data));
  }
}
