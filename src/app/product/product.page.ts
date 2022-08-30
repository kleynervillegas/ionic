import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public fb: FormGroup; // Form
  public file: any = [];
  public filesShow: any = [];
  public countfiles = 0;
  public productDetails: any = [];
  private builderOptions: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public coin: any = ['Dolar', 'Bolivares'];

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toastService: ToastService,
    private sanitizer: DomSanitizer,
    public alertController: AlertController,
    private ar: ActivatedRoute,
    private router: Router,

  ) {
    this.builderOptions = {
      id: [null],
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z-0-9 ]{2,254}'),
        ],
      ],
      description: [
        null,
        [Validators.required
        ],
      ],
      coin: [
        null,
        [Validators.required
        ],
      ],
      price: [
        null,
        [Validators.required,
        Validators.pattern('[0-9,. ]*.'),
        ],
      ],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      stop_min: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]{2,254}'),
          // Validators.minLength(1),
          Validators.maxLength(5),
        ],
      ],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      stop_max: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]{2,254}'),
          // Validators.minLength(1),
          Validators.maxLength(5),
        ],
      ],
      image: [
        null,
        [Validators.required
        ],
      ]
    };
    this.fb = this.formBuilder.group(this.builderOptions);
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    if (this.ar.snapshot.paramMap.get('id') ?? '') {
      this.setValueForm(this.ar.snapshot.paramMap.get('id'));
    }
  }

  async submit() {
    if (!this.fb.invalid) {
      if (this.fb.get('id').value === null) {
        const data = this.fb.value;
        const a = await this.productsService.create({ ...data, image: this.filesShow }).subscribe(data => {
          if (data === 200) {
            this.filesShow = [];
            this.fb.reset();
            this.countfiles = 0;
            return false;
          }
        }, error => {
          this.toastService.toastNotific(error);
          return [];
        });
      } else {
        const data = this.fb.value;
        const a = await this.productsService.update({ ...data, image: this.filesShow }).subscribe(data => {
          if (data === 200) {
            return false;
          }
        }, error => {
          this.toastService.toastNotific(error);
          return [];
        });
      }
    }
  }
  ///////////////////////////////////////
  capturarFile(event): any {
    if (this.countfiles < 6) {
      const archivoCapturado = event.target.files[0];
      this.extraerBase64(archivoCapturado).then((imagen: any) => {
        this.filesShow.push(imagen.base);
      });
      this.file.push(archivoCapturado);
      return false;
    }
    this.toastService.toastNotific('No Puede Cargar Mas Imagenes');
  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      this.countfiles = this.countfiles + 1;
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
  async deleteImage(value: string) {
    const alert = await this.alertController.create({
      header: 'Desea eliminar esta imagen',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('no cancele');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.filesShow = this.filesShow.filter(word => word !== value);
            this.countfiles = this.countfiles - 1;
          }
        }
      ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

  async setValueForm(id) {
    const productDetails = await this.productsService.getDetailsProduct(id).subscribe(data => {
      this.productDetails = data.data;
      const patchValue = {
        id: this.productDetails.id,
        name: this.productDetails.name,
        description: this.productDetails.description,
        coin: this.productDetails.coin,
        price: this.productDetails.price,
        stopMax: this.productDetails.stopMax,
        stopMin: this.productDetails.stopMin,
        image: [''],
      };
      this.filesShow = this.productDetails.image;
      this.fb.patchValue(patchValue);
    });
  }
}
