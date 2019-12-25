import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryNameComponent } from './country-name/country-name.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';


const routes: Routes = [
  {
    path: 'countries',
    component: CountriesComponent
  },
  {
    path: 'countries/:name',
    component: CountriesListComponent
  },
  {
    path: 'employee',
    component:EmployeeComponent
  },
  {
    path: 'employeeid',
    component :EmployeeidComponent
  },
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
