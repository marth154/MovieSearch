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
    static emailValidator: AsyncValidatorFn | AsyncValidatorFn[];
  
    constructor(private emailApi: RequestEmailApiService) { }
  
    /*uniqueEmail(): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return this.emailApi.findEmail((control.value as string)).pipe(
          map((email: Email) => {
            if (email.free === true) {
              console.log(email.free)
              return { shouldBeUnique: true }
            }
            return null
          })
        );
      };
  }

  emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.emailApi.findEmail(control.value as string)
        .pipe(
          map(res => {
            // if username is already taken
            if (res.free === true) {
              // return error
              return { 'userNameExists': true};
            }
          })
        );
    };

  }*/
}