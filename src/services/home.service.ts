import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
    ) { }

   public getUserList(): Observable<any> {
      return this.http
      .get('assets/files/json/data.json')
      .pipe(
        map((res: any) => res.data));
    }
}
