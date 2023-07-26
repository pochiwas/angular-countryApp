import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface.ts';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {


  public countries :Country[] = [];

  constructor(private service:CountriesService) {
    
  }

  searchByRegion(region:string):void{

    this.service.searchByRegion(region)
    .subscribe( countries => {this.countries = countries
    });
  }

  








}
