import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  private progress: number = 95;

  get getPercentage(){
    if ( this.progress <=0) this.progress = 0;
    if ( this.progress >=100) this.progress = 100;
    return `${this.progress}%`
  }

  changeProgress(value: number){
    this.progress += value;
  }
}
