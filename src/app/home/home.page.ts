import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home/home.service';
import { LocalStorageService } from 'src/app/services/LocalStorage/local-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public users: any = [];
  public permissiion: boolean;
  public searchedUser: any;
  token = localStorage.getItem('token');
  public dataUser: any;
  public appPages = [
    {
      title: 'notifications',
      url: '/home/notifications',
      icon: 'notifications'
    },
    {
      title: 'Productos',
      url: '/home/product',
      icon: 'planet'
    },
    {
      title: 'Publicaciones',
      url: '/home/publications',
      icon: 'planet'
    }
  ];
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,

  ) { }

  ngOnInit() {
    this.permissiion = true;
    this.dataUser = this.localStorageService.getIDataUser();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
