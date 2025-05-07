import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const routes: Routes = [
    { path: '', component: CustomerListComponent },
    { path: 'create', component: CustomerFormComponent },
    { path: 'edit/:id', component: CustomerFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
