import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RequestEmailApiService } from './../services/request-email-api.service';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Email } from '../model/email.model';

@Injectable({
    providedIn: 'root'
})
export class EmailValidators {

    static isExist(emailApi: RequestEmailApiService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return emailApi.findEmail(control.value as string).pipe(
          map((email: Email) => {
              return email.smtp_check ? null : { isExist: true };
            })
        );
      };
    }
}
