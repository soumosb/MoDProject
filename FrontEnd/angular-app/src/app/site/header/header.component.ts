import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(private userAuthService: UserAuthService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  getUser() {
    this.username = this.userAuthService.getUser();
    return this.username;
  }

  isLogin() {
    return this.userAuthService.loggedIn;
  }

  onSignOut() {
    this.userAuthService.setLog(false);
    this.authenticationService.setToken(null);
    this.router.navigate(['']);
  }
}
