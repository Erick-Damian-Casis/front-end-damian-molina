import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  {
    path:'drivers',
    component: DriverComponent
  },
  {
    path: '**',
    redirectTo: 'drivers',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
