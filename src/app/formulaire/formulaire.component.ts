import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  Signin: FormGroup;

  get firstname() {
    return this.Signin.get('firstname');
  }
  get lastname() {
    return this.Signin.get('lastname');
  }
  get email() {
    return this.Signin.get('email');
  }
  get password() {
    return this.Signin.get('password');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
