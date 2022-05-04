import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HomeService}  from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public users: any = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private homeService: HomeService,
    ) { }

  ngOnInit() {
   this.getUser();  }

  public gotoCustomers(){
    this.router.navigate(['/customers']);
  }

  getUser(){
   this.homeService.getUserList().subscribe( res=>{
    this.users = res;
   });
    }
}
