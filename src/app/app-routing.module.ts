import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEmployeeComponent} from '../../src/app/employee/create-employee/create-employee.component'
import {UpdateEmployeeComponent} from '../../src/app/employee/update-employee/update-employee.component'
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'employees'},
  {path:'add',component:CreateEmployeeComponent},
  {path:'employees',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
