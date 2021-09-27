import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JwtService } from './services/JwtService/jwt.service';
import { LoginService } from './services/loginServices/login.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { UserService } from './services/userService/user.service';
import { CountriesService } from './services/countryServices/countries.service';

const tokenGetter = () => {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.api],
      }
    })
  ],
  exports: [
  ],
  providers: [
    CountriesService,
    LoginService,
    JwtService,
    UserService
  ]
})
export class CoreModule { }
