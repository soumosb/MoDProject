import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { User } from 'src/app/site/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  error = ''
  userId: number;
  isSignupValid = false;
  editForm: FormGroup;
  saved = false;
  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute, private userAuthService: UserAuthService) { }

  ngOnInit() {

    this.editForm = new FormGroup({
      'id':new FormControl(''),
      'userName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'confirmPassword': new FormControl('', [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      'mobileNumber': new FormControl(null, [Validators.required, Validators.pattern('^[0-9+]*'), Validators.maxLength(13)]),
    });
    this.authenticationService.getUsername(this.userAuthService.getUser()).subscribe((user: User) => {
      if (user) {
        this.editForm.patchValue({
          id:user.id,
          userName: user.userName,
          email: user.email,
          mobileNumber: user.mobileNumber,
        })
      }
    });
  }
  get userName() { return this.editForm.get('userName'); }
  get email() { return this.editForm.get('email'); }
  get mobileNumber() { return this.editForm.get('mobileNumber'); }
  get confirmPassword() { return this.editForm.get('confirmPassword'); }
  get password() { return this.editForm.get('password'); }

  isConfirmPasswordValid() {
    if ((this.editForm.get('password').value != null) && this.editForm.get('confirmPassword').value != null) {
      if ((this.editForm.get('password').value != this.editForm.get('confirmPassword').value)) {
        return true;
      } else {
        return false;
      }
    }
  }

  onSubmitEditForm() {
    console.log(this.editForm.value);
    this.authenticationService.modifyUser(this.editForm.value).subscribe(
      (response) => {
        this.saved = true;
        setTimeout(() => {
          this.saved = false;
          this.router.navigate(['']);

        }, 1000);
      },
      (responseError) => {
        this.error = responseError.error.errorMessage;
      }
    )
  }
}


