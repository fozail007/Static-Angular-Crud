import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'student-details',
    component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
