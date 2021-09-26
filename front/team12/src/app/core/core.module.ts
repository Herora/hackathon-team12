import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { CountriesService } from './services/CountriesServices/countries.service';
import { HttpClientModule } from '@angular/common/http';



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
