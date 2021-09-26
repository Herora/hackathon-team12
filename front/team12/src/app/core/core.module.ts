import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CountriesService } from './services/countriesServices/countries.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { JwtService } from './services/JwtService/jwt.service';
import { LoginService } from './services/loginServices/login.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

const tokenGetter = () => {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [
    FooterComponent,
    AuthenticationComponent,
    HeaderComponent
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
    FooterComponent,
    AuthenticationComponent,
    HeaderComponent
  ],
  providers: [
    CountriesService,
    LoginService,
    JwtService
  ]
})
export class CoreModule { }
