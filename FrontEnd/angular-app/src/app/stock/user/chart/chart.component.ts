import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { StockPrice } from '../../stockPrice';
import { ChartService } from 'src/app/service/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  time: Time;
  stockPrice:StockPrice[];
  lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  lineChartLabels = [];
  lineChartType = 'line';
  lineChartLegend = true;
  lineChartData = [
    { data: [], label: '' }
  ];
  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }
  
  timeChange(companyCode,startTime, endTime) {
    this.chartService.getAllCompany(companyCode, startTime, endTime).subscribe(data => {
      console.table(data);
      this.stockPrice=data;
      let x: string[] = [], y: number[] = [];

      for (let i = 0; i < this.stockPrice.length; i++) {
        x.push(this.stockPrice[i].time);
        y.push(this.stockPrice[i].currentPrice);
      }

      this.lineChartLabels = x;
    this.lineChartData.push({ data: y, label:"Stock Code" });
    });
  }
}
