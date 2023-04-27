import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialComponent } from './components/material/material.component';
import { AuthGuard } from './guards/auth.guard';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'platform/home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'platform/material',
    component: MaterialComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'platform/material/list',
    component: MaterialListComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
