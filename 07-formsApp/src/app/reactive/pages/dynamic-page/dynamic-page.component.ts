import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear Solid', Validators.required],
      ['Zelda', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', Validators.required);

  constructor(
    private readonly fb: FormBuilder,
    private readonly validtorService: ValidatorsService
  ) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string) {
    return this.validtorService.isValidField(this.myForm, field);
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `Este campo es requerido.`;
        case 'minlength':
          return `El campo debe tener al menos ${errors['minlength'].requiredLength} caracteres.`;
      }
    }
    return null;
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return;
    const newFavorite = this.newFavorite.value;
    //this.favoriteGames.push(new FormControl(newFavorite, Validators.required));
    this.favoriteGames.push(this.fb.control(newFavorite, Validators.required));
    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
