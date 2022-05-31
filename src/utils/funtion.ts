import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
  regexSpecialSymbols,
  REGEX_NUMERIC,
  REGEX_SYMBOLS_ALLOWED,
} from 'src/utils/regex';
export const ValidationOnlyNumber = (Control: AbstractControl): any => {
    const valuesAcept = /^[0-9]+$/;
    if (Control.value != null) {
      if (Control.value.match(valuesAcept)) {
        return { onlyNumber: 'Este campo no debe ser solo númerico' };
      }
      return null;
    }
  };

  /**
 * Funcion para validar confirmacion de contrasenas
 * @function validationPasswordConfir
 * @param Control: AbstractControl
 * @returns null
 */
export function validationPasswordConfir(input:string): any {
  console.log(855555)
}

 