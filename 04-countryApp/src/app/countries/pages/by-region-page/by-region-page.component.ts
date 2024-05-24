import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountryService } from '../../services/countries.service';

type Region = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countryService: CountryService) {}

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.isLoading = true;
    this.countryService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
