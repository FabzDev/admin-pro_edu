import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BaseChartDirective } from 'ng2-charts';


@NgModule({
  declarations: [
    IncreaserComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective

  ], exports:[
    IncreaserComponent,
    DoughnutChartComponent
  ]
})
export class ComponentsModule { }
