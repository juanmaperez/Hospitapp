import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progressB : Number = 20;
  progressG : Number = 30;

  constructor() { }

  ngOnInit() {
  }

 


}
