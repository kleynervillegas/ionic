import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public fb: FormGroup; // Form
  previsualizacion: string;
  public showImage = false;
  public archivos: any = [];
  public name: any = [];
  private builderOptions: any;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private sanitizer: DomSanitizer

  ) {

    this.builderOptions = {
      // _id: [null],
      name: [
        null,
        [
          Validators.required
        ],
      ],
      description: [
        null,
        [Validators.required
        ],
      ],
      price: [
        null,
        [Validators.required
        ],
      ],
      stopMin: [
        null,
        [Validators.required
        ],
      ],
      stopMax: [
        null,
        [Validators.required
        ],
      ],
      image: [
        [Validators.required
        ],
      ]
    };
    this.fb = this.formBuilder.group(this.builderOptions);
  }

  ngOnInit() {
  }

  async submit() {
    if (!this.fb.invalid) {
      const data = this.fb.value;
      const a = await this.productsService.create({ ...data, image: this.name }).subscribe(data => console.log(data), error => {
        console.log(error);
        return [];
      });
    }
  }
  ///////////////////////////////////////
  capturarFile(event): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
    this.archivos.push(archivoCapturado);
  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      this.showImage = true;
      this.name.push($event.name);
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  });

}
