import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public fb: FormGroup; // Form
  public file: any = [];
  public filesShow: any = [];
  private builderOptions: any;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toastService: ToastService,
    private sanitizer: DomSanitizer,
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
      const a = await this.productsService.create({ ...data,image:this.filesShow}).subscribe(data => {   
       if(data.code===200){
            this.toastService.toastNotific('Producto Registrado Satisfactoriamente');
            this.filesShow=[];
            this.fb.reset();
            return false;
        }
        this.toastService.toastNotific(data.status);
      }, error => {
        console.log(error);
        return [];
      });
    }
  }
  ///////////////////////////////////////
  capturarFile(event): any {
    if( this.filesShow.length<6){
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
