import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociateBootcampComponent } from './pages/asociate-bootcamp/asociate-bootcamp.component';

const routes: Routes = [
  { 
    path: '', component: AsociateBootcampComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociateBootcampRoutingModule { }
