import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
