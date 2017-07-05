import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Stats } from 'app/user-stats/models/stats';

@Component({
    selector: 'ratio-chart',
    templateUrl: './ratio-chart.component.html'
})

export class RatioChartComponent implements OnInit{
    @Input() stats: Stats[];

    public lineChartData:Array<any>;

    ngOnInit(): void {
        this.lineChartData = [
        {data: [this.stats[3].Yield, this.stats[2].Yield, this.stats[1].Yield, this.stats[0].Yield], label: '% Yield'}
      ];
    }

  // lineChart
 
    public lineChartLabels:Array<any> = ['Marzo', 'Abril', 'Mayo', 'Junio'];
    public lineChartOptions:any = {
      responsive: true
    };
    public lineChartColors:Array<any> = [
      { // grey
        backgroundColor: 'rgba(72,213,168,0.4)',
        borderColor: 'rgba(33,149,113,1)',
        pointBackgroundColor: 'rgba(33,128,149,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];

    public doughnutChartColors: any[] = [{ backgroundColor: ["#57D449", "#D45E49", "#4979D4"] }];

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    public doughnutChartLabels:string[] = ['Aciertos', 'Fallos', 'Nulos'];
    public doughnutChartData:number[] = [55, 40, 8];
    public doughnutChartType:string = 'doughnut';

    public randomize():void {
      let _lineChartData:Array<any> = new Array(this.lineChartData.length);
      for (let i = 0; i < this.lineChartData.length; i++) {
        _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        for (let j = 0; j < this.lineChartData[i].data.length; j++) {
          _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        }
      }
      this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
}
