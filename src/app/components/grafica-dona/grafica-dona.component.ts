import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {


  @Input() ChartLabels: Label[] = [];
  @Input() ChartData = [];
  @Input() ChartType: ChartType = 'line';

  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.4)', 'rgba(0,255,0,0.4)', 'rgba(0,0,255,0.4)'],
    },
  ];
  constructor() { }

  ngOnInit() {

  }

}
