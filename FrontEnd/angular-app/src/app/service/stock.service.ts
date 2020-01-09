import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stockApiUrl = environment.baseUrl + '/stock-service';
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }

  importDatas(data): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.post<void>(this.stockApiUrl + '/import', data, httpOptions);
  }

  getSummary(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get<any>(this.stockApiUrl + '/import', httpOptions);
  }

  manageCompanies(): Observable<any> {
    return this.httpClient.get<any>(this.stockApiUrl + '/manage/companies');
  }

  manageExchange(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get<any>(this.stockApiUrl + '/manage/exchanges', httpOptions);
  }
}
