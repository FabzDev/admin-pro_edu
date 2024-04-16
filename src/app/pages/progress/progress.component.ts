import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  public primaryBarProgress: number = 95;
  public infoBarProgress: number = 5;

}
