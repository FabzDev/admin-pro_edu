import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: ``
})
export class DoughnutChartComponent {
  @Input() receivedLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  @Input("name") chartName: string = "Sales"

  @Input("totalData") doughnutChartData: ChartData<'doughnut'> = {
    labels: this.receivedLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
      },
    ],
  };

}
