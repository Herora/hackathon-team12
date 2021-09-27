import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../models/base-service/base-http.services';
import { Bootcamp } from '../../models/bootcamp/bootcamp';

@Injectable({
  providedIn: 'root'
})
export class BootcampService extends BaseHttpService<Bootcamp>{

  constructor(protected http: HttpClient) {
    super(http, environment.api);
  }
  
}
