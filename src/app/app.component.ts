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
     { title: 'Cities',
     url: '/card',
     icon: 'people'
     },
    { title: 'Formulario',
    url: '/form',
    icon: 'people'
    },
    // { title: 'login',
    // url: '/login',
    // icon: 'log-in'
    // },
    { title: 'Productos',
    url: '/product',
    icon: 'planet'
    },
    { title: 'Publicaciones',
    url: '/publications',
    icon: 'planet'
    },
  ];
  constructor() {}
}
