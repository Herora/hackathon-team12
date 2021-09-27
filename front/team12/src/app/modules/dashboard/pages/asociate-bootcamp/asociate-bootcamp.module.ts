import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociateBootcampRoutingModule } from './asociate-bootcamp-routing.module';
import { AsociateBootcampComponent } from './pages/asociate-bootcamp/asociate-bootcamp.component';


@NgModule({
  declarations: [
    AsociateBootcampComponent
  ],
  imports: [
    CommonModule,
    AsociateBootcampRoutingModule
  ]
})
export class AsociateBootcampModule { }
