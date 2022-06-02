import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public localStorage: any;
  public token: any;

  constructor() { }
  public setItem(token,email) {
      this.localStorage=   localStorage.setItem('token', token);
      this.localStorage=   localStorage.setItem('email', email);
  }

  public getIToken(){
    return this.token = localStorage.getItem('token');
  }
  public getIEmail(){
    return this.token = localStorage.getItem('email');
  }
}
