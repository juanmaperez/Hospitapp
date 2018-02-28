import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'incrementator',
  templateUrl: './incrementator.component.html',
  styles: []
})
export class IncrementatorComponent implements OnInit {

  @Input() progress: number = 50;
  @Input() title: string = 'Title'

  @Output() increment : EventEmitter<number> = new EventEmitter();

  @ViewChild('inputProgress') inputProgress: ElementRef

  constructor() { }

  ngOnInit() {
  }

  onChanges(value: number){

    if(value >= 100){
      this.progress = 100;
    } else if ( value <= 0){
      this.progress = 0
    } else {
      this.progress = value
    }
    this.inputProgress.nativeElement.value = this.progress;
    this.increment.emit(this.progress)
  }

  changeValue (valor): void{
    if(this.progress <= 100 && this.progress >= 0){
       this.progress += valor 
    }
    this.progress = (this.progress>100)? 100 : this.progress 
    this.progress = (this.progress<0)? 0 : this.progress 

    this.increment.emit(this.progress);
    this.inputProgress.nativeElement.focus();

  }

    
  }

}
