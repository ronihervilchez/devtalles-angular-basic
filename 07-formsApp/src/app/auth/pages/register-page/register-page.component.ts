import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ccustomValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(ccustomValidators.firstNameAndLastnamePattern),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(ccustomValidators.emailPattern)],
    ],
    username: ['', [Validators.required, ccustomValidators.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });
  constructor(private readonly fb: FormBuilder) {}

  isValidField(field: string): void {
    //TODO obtener desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
