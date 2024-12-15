import { Injectable } from '@angular/core';
import { Region } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _regions: Region[] = Object.values(Region);
  constructor() {}

  get regions(): Region[] {
    return [...this._regions];
  }
}
