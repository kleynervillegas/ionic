import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home',
     url: '/home',
      icon: 'home'
     },
    { title: 'Costomres',
     url: '/customers',
     icon: 'people'
     },
  ];
  constructor() {}
}