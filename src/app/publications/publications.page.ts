import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { CardService } from 'src/app/services/cards/card.service';
import { NotifysService } from 'src/app/services/notifys/notifys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  public publications: any = [];
  public notifications: any = [];
  constructor(
    private productsService: ProductsService,
    private toastService: ToastService,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private CardServiceController: CardService,
    private router: Router,
    private notifysService: NotifysService,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.getAll();
    this.getNotifyUser();
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

  async addCar(item)
   {
    const a = await this.CardServiceController.addCar(item.id).subscribe(data => {
      if(data===200){
      }
    }, error => {
      console.log(error);
      return [];
    });
  }

  async getNotifyUser() {
    const a = await  this.notifysService.getNotifyUser().subscribe(data => {
        this.notifications =data;
        console.log( this.notifications);
    }, error => {
      console.log(error);
      return [];
    });

  }

  async editProducto(item)
  {
    this.router.navigate(['/home/product/edit/',item.id]);
 }

 async deleteProducto(item)
 {
  const a = await this.productsService.deleteProducto(item.id).subscribe(data => {
    if(data===200){
    }
  }, error => {
    console.log(error);
    return [];
  });
}

}
