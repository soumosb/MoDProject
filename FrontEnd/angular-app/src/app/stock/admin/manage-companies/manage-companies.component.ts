import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Company } from '../../company';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  companies: Company[];
  loader: boolean;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.loader=true;
    this.stockService.manageCompanies().subscribe(data => {
      this.loader=false;
      this.companies = data;
    });
  }

}
