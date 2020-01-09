import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../site/user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token:string;
  private authenticationApiUrl = environment.baseUrl+'/authentication-service';
  constructor(private httpClient: HttpClient,private userAuthService:UserAuthService) { }

  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ':' + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    return this.httpClient.get(this.authenticationApiUrl+'/authenticate', { headers });
  }

  addUser(user:User):Observable<void>{
    return this.httpClient.post<void>(this.authenticationApiUrl+'/users',user);
  }

  modifyUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };
    return this.httpClient.put<void>(this.authenticationApiUrl + "/users/"+this.userAuthService.getUser(), user,httpOptions);
  }
  public getUsername(username: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };
    return this.httpClient.get<User>(this.authenticationApiUrl + '/users/' + username, httpOptions);
  }
  
  public setToken(token: string) {
    this.token = token;
  }

  public getToken() {
    console.log(this.token);
    return this.token;
  }
}
