import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountriesListComponent } from './countries-list/countries-list.component';


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
    path: 'employees',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
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
