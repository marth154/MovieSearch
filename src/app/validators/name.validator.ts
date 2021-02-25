import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameValidator {
  static cannotContainNumber(control: AbstractControl): ValidationErrors {
    const containtNumber = (control.value as string).split('').some(v => Number(v) >= 0);
    return containtNumber ? { cannotContainNumber: true } : null;
  }

}
