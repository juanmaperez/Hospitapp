import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styles: []
})
export class DonutChartComponent implements OnInit {

  @Input() labelsReceived:string[]; 
  @Input() dataReceived:number[]; 
  @Input() titleReceived:string;
  @Input() chartTypeReceived: string;

  constructor() { }

  ngOnInit() {
  }

}
