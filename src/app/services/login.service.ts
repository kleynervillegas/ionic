import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URLS, URLSAuthentication } from 'src/urls/urls';

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
    private http: HttpClient
  ) { }

  /**
   * validateUser
   */
  public validateUser(data): Observable<any> {
    return this.http.post(URLSAuthentication.validateAuthentication, data, this.options);
  }

}
