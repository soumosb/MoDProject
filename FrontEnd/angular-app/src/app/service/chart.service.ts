import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private chartApiUrl = environment.baseUrl + '/stock-service';
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }
  

  public getAllCompany(companyCode: number, startTime: Time, endTime: Time): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get<any>(this.chartApiUrl + "/charts/" + companyCode + "/" + startTime + "/" + endTime, httpOptions);
  }
}
