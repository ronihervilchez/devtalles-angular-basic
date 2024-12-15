import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider(control: FormControl): ValidationErrors | null {
    const value = control.value.trim().toLowerCase();
    return value !== 'strider' ? null : { cantBeStrider: true };
  }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldValueOne = formGroup.get(fieldOne)?.value;
      const fieldValueTwo = formGroup.get(fieldTwo)?.value;

      if (fieldValueOne !== fieldValueTwo) {
        formGroup.controls[fieldTwo].setErrors({ noEqual: true });
        return { noEqual: true };
      }

      formGroup.controls[fieldTwo].setErrors(null);
      return null;
    };
  }
}
