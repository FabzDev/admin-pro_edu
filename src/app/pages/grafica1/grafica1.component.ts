import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``,
})
export class Grafica1Component {
  // Doughnut
  public labels1: string[] = [
    'Fabio',
    'Yulieth',
    'Alejandro',
  ];

  public data1: number[] = [34, 27, 1]
  public colors1: string[] = ['blue', '#FF9FEE', 'yellow']
  public name1: string = 'Flia Escobar Horta'

  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: this.data1,
        backgroundColor: this.colors1,
      },
    ],
  };
}
