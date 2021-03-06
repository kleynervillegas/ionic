import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastService } from 'src/app/services/toast.service';
import { AlertController, ToastController } from '@ionic/angular';


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
  private builderOptions: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public coin: any = ['Dolar', 'Bolivares'];

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toastService: ToastService,
    private sanitizer: DomSanitizer,
    public alertController: AlertController,
  ) {
    this.builderOptions = {
      // _id: [null],
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
      stopMin: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]{2,254}'),
          // Validators.minLength(1),
          Validators.maxLength(5),
        ],
      ],
      stopMax: [
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

  async submit() {
    if (!this.fb.invalid) {
      const data = this.fb.value;
      const a = await this.productsService.create({ ...data, image: this.filesShow }).subscribe(data => {
        if (data.code === 200) {
          this.toastService.toastNotific('Producto Registrado Satisfactoriamente');
          this.filesShow = [];
          this.fb.reset();
          return false;
        }
        this.toastService.toastNotific(data.status);
      }, error => {
        this.toastService.toastNotific(error);
        return [];
      });
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
  async deleteImage(key: number) {
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
            delete this.filesShow[key];
            this.countfiles = this.countfiles - 1;
          }
        }
      ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

}
