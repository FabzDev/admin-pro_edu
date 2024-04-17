import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-increaser',
  templateUrl: './increaser.component.html',
  styleUrl: './increaser.component.css',
})
export class IncreaserComponent {
  @Input() progress: number = 50;
  @Input() btnColor: string = 'btn btn-primary';

  @Output() emitterValue: EventEmitter<number> = new EventEmitter<number>();

  changeProgress(value: number) {
    if (this.progress <= 0 && value < 0) {
      this.emitterValue.emit(0);
      return;
    }
    if (this.progress >= 100 && value > 0) {
      this.emitterValue.emit(100);
      return;
    }

    this.progress += value;
    this.emitterValue.emit(this.progress);

  }

  ngModelChange(newValue: number){
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.emitterValue.emit(this.progress);
  }
}
