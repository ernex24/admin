import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

   // Doughnut
   @Input ('chartLabels') doughnutChartLabels: string[] = [];
   @Input ('chartData') doughnutChartData: number[] = [];
   @Input ('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
