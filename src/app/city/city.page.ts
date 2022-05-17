import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  public id: any;
  public cities: any = [];
  token = localStorage.getItem('token');
  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCities();
    console.log('token',this.token);
  }
  getCities() {
    this.cardService.getCities().subscribe(res => {
      this.cities = res;
      this.cities = this.cities.find(x => x.id == this.id);
    });
  }
}
