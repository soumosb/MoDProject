import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { Role } from '../role';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;
  role: Role;
  error:string='';
  loader: boolean;
  constructor(private authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      mobileNumber: new FormControl(null, [Validators.required, Validators.pattern('^[0-9+]*'), Validators.maxLength(13)]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
    });

  }

  get userName() { return this.signupForm.get('userName'); }
  get email() { return this.signupForm.get('email'); }
  get mobileNumber() { return this.signupForm.get('mobileNumber'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get password() { return this.signupForm.get('password'); }

  isConfirmPasswordValid() {
    if ((this.signupForm.get('password').value != null) && this.signupForm.get('confirmPassword').value != null) {
      if ((this.signupForm.get('password').value != this.signupForm.get('confirmPassword').value)) {
        return true;
      } else {
        return false;
      }
    }
  }

  onSubmit() {
    this.user = this.signupForm.value;
    this.loader=true;
    this.authenticationService.addUser(this.user).subscribe((data) => {
      this.loader=false;
      this.router.navigate(['login']);
    },
    (responseError) => {
        this.error = responseError.error.message;
        this.loader=false;
      }
    );
  }
}
