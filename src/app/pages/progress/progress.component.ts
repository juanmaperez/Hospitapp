import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progressB: number = 20;
  progressG: number = 30;

  constructor() { }

  ngOnInit() {
  }


}
