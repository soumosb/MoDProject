import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  formValidation: boolean = true;
  error: String = '';
  loader: boolean;
  constructor(private formbuilder: FormBuilder,private router: Router, private authenticationService: AuthenticationService, private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    this.authenticationService.authenticate(this.username.value, this.password.value).subscribe(data => {
      this.formValidation = true;
      this.userAuthService.setUser(this.username.value);
      this.authenticationService.setToken(data.token);
      this.userAuthService.setRole(data.role);
      this.userAuthService.setLog(true);
      console.log(data.role);
      if(data.role=="ADMIN"){
        this.router.navigate(["admin"]);
      }else{
        this.router.navigate(["user"]);
      }
      
    },
      error => {
        this.formValidation = false;
        if (error.status == 401) {
          this.error = "Invalid Username/Password";
        }
      });
  }

}
