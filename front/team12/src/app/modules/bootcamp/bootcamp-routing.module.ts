import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampComponent } from './pages/bootcamp/bootcamp.component';

const routes: Routes = [
  { path: '', component: BootcampComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootcampRoutingModule { }
