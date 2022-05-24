import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
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
  public appPages = [ 
    { title: 'Costomres',
     url: '/home/customers',
     icon: 'people'
     },
     { title: 'Cities',
     url: '/home/card',
     icon: 'people'
     },
    { title: 'Formulario',
    url: '/home/form',
    icon: 'people'
    },
    { title: 'Productos',
    url: '/home/product',
    icon: 'planet'
    },
    { title: 'Publicaciones',
    url: '/home/publications',
    icon: 'planet'
    },
  ];
  constructor(
    private router: Router,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.permissiion = true;
    this.getUser();
    localStorage.clear();
  }

  public gotoCustomers() {
    this.router.navigate(['/customers']);
  }

  getUser() {
    this.homeService.getUserList().subscribe(res =>{ this.users = res;
      this.searchedUser = this.users;
    });
  }
  searchCustomer(event) {
    console.log(event);
    const text = event.target.value;
    this.searchedUser = this.users;
    if (text && text.trim() !== '') {
      this.searchedUser = this.searchedUser.filter((user: any)=>(user.name.toLowerCase().indexOf(text.toLowerCase()) > -1))
       }
  }
  doRefresh(event) {
    this.getUser();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 200);
  }
}
