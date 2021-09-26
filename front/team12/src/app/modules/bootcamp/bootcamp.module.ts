import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootcampRoutingModule } from './bootcamp-routing.module';
import { BootcampComponent } from './pages/bootcamp/bootcamp.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BootcampComponent
  ],
  imports: [
    CommonModule,
    BootcampRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [ BootcampComponent ]
})
export class BootcampModule { }
