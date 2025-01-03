import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  /* validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(`🚀 ~ file: email-validator.servive.ts:13 ~ email:`, email);
    return of({ emailTaken: true }).pipe(delay(200));
  } */
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    const htppCallObsercable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === 'fernando@google.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
          //return;
        }
        subscriber.next(null);
        subscriber.complete();
      }
    ).pipe(delay(3000));
    return htppCallObsercable;
  }
}
