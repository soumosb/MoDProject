import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Company } from '../company';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loader:boolean;
  search:boolean;
  companies:Company[];
  companyList:Company[];

  constructor(private stockService:StockService,private router:Router) { }
  onSearchText(event:any){
    this.companyList = this.companies.filter(product=>{
      this.search=true;
      let isNameSimilar = product.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
      return isNameSimilar;
    });
  }
  ngOnInit() {
    this.loader=true;
    this.stockService.manageCompanies().subscribe(data => {
      this.loader=false;
      this.companies = data;
    });
  }
}
