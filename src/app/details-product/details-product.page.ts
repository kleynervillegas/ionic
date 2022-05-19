import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.page.html',
  styleUrls: ['./details-product.page.scss'],
})
export class DetailsProductPage implements OnInit {
  public id: any;
  public productDetails: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetailsProduct();
  }

  async getDetailsProduct() {
    const productDetails = await this.productsService.getDetailsProduct(this.id).subscribe(data => {
      this.productDetails = data.data;
    });
  }

}
