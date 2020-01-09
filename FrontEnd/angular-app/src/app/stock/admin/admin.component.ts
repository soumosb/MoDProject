import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  importData: boolean;
  company: boolean;
  exchange: boolean;
  constructor() { }

  ngOnInit() {
  
  }
  importDatas() {
    this.importData = true;
    this.company = false;
    this.exchange = false;
  }
  manageCompany() {
    this.importData = false;
    this.company = true;
    this.exchange = false;
  }
  manageExchange() {
    this.importData = false;
    this.company = false;
    this.exchange = true;
  }
  
}
