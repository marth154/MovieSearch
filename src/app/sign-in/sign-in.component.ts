import { EmailValidators } from './../validators/email.validator';
import { RequestEmailApiService } from './../services/request-email-api.service';
import { NameValidator } from './../validators/name.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';
import { PhoneValidator } from '../validators/phone.validator';
import { Subscription } from 'rxjs';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  registerForm;

  get first_name() {
    return this.registerForm.get('first_name');
  }

  get last_name() {
    return this.registerForm.get('last_name');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }
  
  emailSubscription: Subscription;

  constructor(private emailApi: RequestEmailApiService) { }


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl(
        '', 
        [
          Validators.required, 
          NameValidator.cannotContainNumber,
          Validators.pattern('[a-zA-Z]')
        ]
      ),
      last_name: new FormControl(
        '', 
        [
          Validators.required, 
          NameValidator.cannotContainNumber,
          Validators.pattern('[a-zA-Z]')
        ]
      ),
      homme: new FormControl(),
      femme: new FormControl(),
      autre: new FormControl(),
      phone: new FormControl(
        '', 
        [
          Validators.required, 
          Validators.minLength(10),
          Validators.maxLength(10), 
          PhoneValidator.isANumber, 
          PhoneValidator.cannotContainSpaces, 
          PhoneValidator.startWithNumberZero
        ]
      ),
      email: new FormControl(
        '', 
        [
            Validators.required, 
            Validators.email, 
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ],
        EmailValidators.isExist(this.emailApi),
      ),
      password: new FormControl(
        '', 
        Validators.required
      ),
      confirm_password: new FormControl(
        '', 
        [
          Validators.required,
          PasswordValidator('password')
        ]
      )
    });
  }

  show() {
    console.log(this.registerForm.value)
  }

}