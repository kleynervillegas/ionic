import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public cities: any = [];
  public permissiion: boolean;

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.permissiion= true;
    this.getCities();
  }
  getCities() {
    this.cardService.getCities().subscribe(res =>this.cities = res);
  }
}
