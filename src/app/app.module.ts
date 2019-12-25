import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { CountryNameComponent } from './country-name/country-name.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryNameComponent,
    CountriesListComponent,
    EmployeeComponent,
    EmployeeidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
