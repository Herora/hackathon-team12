import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../models/base-service/base-http.services';
import { Country } from '../../models/countries/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService extends BaseHttpService<Country>{

  constructor(protected http: HttpClient) {
    super(http, environment.countriesApi);
  }
  
}
