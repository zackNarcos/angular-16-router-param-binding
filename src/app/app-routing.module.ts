import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListComponent,
    data: { title: 'This param (customers)come from app-routing' },
  },
  {
    path: '',
    redirectTo: '',
    data: { param: 'This param (pathMatch)come from app-routing' },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
