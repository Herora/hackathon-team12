import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../models/base-service/base-http.services';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService<User> {

  constructor(protected http: HttpClient) {
    super(http, environment.api);
  }
}
