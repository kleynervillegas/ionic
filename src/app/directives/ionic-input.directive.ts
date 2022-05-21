import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appIonicInput]'
})
export class IonicInputDirective {
    /// Validator del campo
    @Input() validationItem: any | undefined;
    // Propiedd invalid del objeto de Validation del campo
    @Input() isInvalid: boolean | undefined;
    // Valor del form control, es necesario pasarlo para que el onChange sea más preciso
    @Input() value: string | undefined;
    // Si viene de un formArray, nombre del form control
    @Input() formArrayControlName: string | undefined;
    // Elemento HTML que contiene esta directiva
    htmlELement: HTMLElement;
  constructor(el: ElementRef) {
        // Pasamos el elemento nativo HTML a la variable
        this.htmlELement = el.nativeElement;
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges() {
    // Buscamos el tipo de error e introducimos al elemento
    // el mensaje de error correspondiente
    // Requerido 
    // if (
    //   this.validationItem?.errors?.required ||
    //   (this.formArrayControlName
    //     ? this.validationItem?.controls[this.formArrayControlName]?.errors
    //         ?.required
    //     : false)
    // ) {
    //   console.log('sd');


    //   this.htmlELement.innerText = 'Este campo es requerido';
    //   return;
    // } 
  }
}
