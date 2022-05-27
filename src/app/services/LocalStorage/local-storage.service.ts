import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public localStorage: any;
  public token: any;

  constructor() { }
  public setItem(token) {
      this.localStorage=   localStorage.setItem('token', token);
  }

  public getIToken(){
    return this.token = localStorage.getItem('token');
  }
}
