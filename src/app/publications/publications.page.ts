import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { CardService } from 'src/app/services/cards/card.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  public publications: any = [];
  constructor(
    private productsService: ProductsService,
    private toastService: ToastService,
    private CardServiceController: CardService,

  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.getAll();
  }
  async getAll() {
    const a = await this.productsService.getAll().subscribe(data => {
      if (data.code === 200) {
        this.publications = data.data;
        return false;
      }
      this.toastService.toastNotific(data.status);
    }, error => {
      console.log(error);
      return [];
    });

  }

  async addCar(item: object)
   {
    const a = await this.CardServiceController.addCar(item).subscribe(data => {
      if (data.code === 200) {
        this.publications = data.data;
        return false;
      }
      this.toastService.toastNotific(data.status);
    }, error => {
      console.log(error);
      return [];
    });
  }

}
