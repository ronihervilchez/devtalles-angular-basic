import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../../shared/services/email-validator.servive';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validtorService.firstNameAndLastnamePattern),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validtorService.emailPattern),
      ],
      [this.EmailValidator],
    ],
    username: ['', [Validators.required, this.validtorService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly validtorService: ValidatorsService,
    private readonly EmailValidator: EmailValidator
  ) {}

  isValidField(field: string) {
    return this.validtorService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
