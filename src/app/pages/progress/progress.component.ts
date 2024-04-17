import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  public primaryBarProgress: number = 50;
  public infoBarProgress: number = 50;



  changeBarProgress(value: number){
    this.primaryBarProgress = value;
  }

}
