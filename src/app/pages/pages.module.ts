import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
