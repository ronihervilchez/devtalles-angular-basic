import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
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

  ngOnInit(): void {
    this.countries = this.countryService.cacheStorage.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStorage.byRegion.region;
  }

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.isLoading = true;
    this.countryService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
