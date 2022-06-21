import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public localStorage: any;
  constructor() { }
  public setItem(token,user) {
      this.localStorage=   localStorage.setItem('token', token);
      this.localStorage=   localStorage.setItem('user', JSON.stringify(user));
  }

  public getIToken(){
    return localStorage.getItem('token');
  }
  public getIDataUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
}
