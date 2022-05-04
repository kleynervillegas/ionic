import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService}  from 'src/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    public users: any = [];
    public permissiion: boolean;

  constructor(
    private router: Router,
    private homeService: HomeService,
    ) { }

  ngOnInit() {
    this.permissiion = true;
   this.getUser();
   }

  public gotoCustomers(){
    this.router.navigate(['/customers']);
  }

  getUser(){
   this.homeService.getUserList().subscribe( res=> this.users = res);
    }
}
