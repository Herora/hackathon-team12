import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CountriesService } from './services/countriesServices/countries.service';
import { AuthenticationComponent } from './authentication/authentication.component';



@NgModule({
  declarations: [
    FooterComponent,
    AuthenticationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    AuthenticationComponent,
    HeaderComponent
  ],
  providers: [
    CountriesService
  ]
})
export class CoreModule { }
