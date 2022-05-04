import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
  }

  public gotoCustomers(){
    this.router.navigate(['/customers']);
  }
}
