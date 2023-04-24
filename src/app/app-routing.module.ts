import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialComponent } from './components/material/material.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: LoginComponent,
  },
  {
    path: 'platform',
    redirectTo: 'platform/home',
  },
  {
    path: 'platform/home',
    component: HomeComponent,
  },
  {
    path: 'platform/material',
    component: MaterialComponent,
  },
  { path: '**', redirectTo: 'signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
