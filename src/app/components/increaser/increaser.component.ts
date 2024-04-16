import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'component-increaser',
  templateUrl: './increaser.component.html',
  styleUrl: './increaser.component.css'
})
export class IncreaserComponent {
  @Input() btnColor: string = '';

  @Input() progress: number = 50;

  @Output()
  get getPercentage(){
    return `${this.progress}%`
  }

  changeProgress(value: number){
    if ( this.progress <=0 && value < 0) return;
    if ( this.progress >= 100 && value > 0 ) return;
    this.progress += value;
  }
}
