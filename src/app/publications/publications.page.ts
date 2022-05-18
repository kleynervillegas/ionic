import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  public publications:any =[];
  constructor(
    private productsService: ProductsService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.getAll();
    }

 async getAll(){
    const a = await this.productsService.getAll().subscribe(data => {
      if(data.code===200){
            this.publications= data.data;
           console.log(this.publications);
           return false;
       }
       this.toastService.toastNotific(data.status);
     }, error => {
       console.log(error);
       return [];
     });

  }
}
