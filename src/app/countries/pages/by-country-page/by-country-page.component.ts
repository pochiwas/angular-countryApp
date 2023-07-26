import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface.ts';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor(private service:CountriesService) {
    
  }

  searchByCountry(term:string):void{
    this.service.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

}
