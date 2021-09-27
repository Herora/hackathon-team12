import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { TemplatesModule } from './components/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
