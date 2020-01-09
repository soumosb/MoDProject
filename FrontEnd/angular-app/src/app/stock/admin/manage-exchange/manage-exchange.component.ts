import { Component, OnInit } from '@angular/core';
import { Exchange } from '../../exchange';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {
  exchanges: Exchange[];
  loader: boolean;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.loader = true;
    this.stockService.manageExchange().subscribe(data => {
      this.loader = false;
      this.exchanges = data;
    });
  }

}
