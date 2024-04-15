import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'progress', component: ProgressComponent },
  //     { path: 'grafica1', component: Grafica1Component },
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //   ],
  // },

  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.module').then(m => m.AuthModule),
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
