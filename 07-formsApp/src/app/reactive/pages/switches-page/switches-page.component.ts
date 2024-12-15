import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person = {
    gender: 'F',
    wantNotifications: false,
  };

  constructor(
    private readonly fb: FormBuilder,
    private readonly validtorService: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: string) {
    return this.validtorService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    const erroresMap: Record<string, string> = {
      required: 'Este campo es requerido.',
      termsAccepted: 'Debe aceptar los términos y condiciones.',
    };
    for (const key of Object.keys(errors)) {
      if (erroresMap[key]) return erroresMap[key];
    }
    return null;
  }

  //ngSubmit
  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const { termsAndConditions, ...newPerson } = this.myForm.value;
    console.log(this.myForm.value);
    this.person = newPerson;
    console.log(this.person);
  }
}
