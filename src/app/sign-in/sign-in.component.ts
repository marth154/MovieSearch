import { NameValidator } from './../validators/name.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidators } from '../validators/password.validator';
import { phoneValidator } from '../validators/phone.validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup;

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

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, NameValidator.cannotContainNumber]),
      last_name: new FormControl('', [Validators.required, NameValidator.cannotContainNumber]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), phoneValidator.isANumber, phoneValidator.cannotContainSpaces, phoneValidator.startWithNumberZero]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', [Validators.required, this.isDifferent]),
    });
  }

  isDifferent(registerForm: FormGroup) { 
    const password = registerForm.get('password').value;
    const confirmPassword = registerForm.get('confirm_password').value;

    return password === confirmPassword ? null : { notSame: true }     
  }
  
}
