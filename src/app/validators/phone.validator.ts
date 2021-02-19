import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PhoneValidator {
  static cannotContainSpaces(control: AbstractControl): ValidationErrors {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpaces: true };
    }
    return null;
  }

  static isANumber(control: AbstractControl): ValidationErrors {
    return isNaN(control.value) ? { isANumber: true } : null;
  }

  static startWithNumberZero(control: AbstractControl): ValidationErrors {
    return (control.value as string).substr(0,1) === '0' ? null : { startWithNumberZero: true };
  }

}