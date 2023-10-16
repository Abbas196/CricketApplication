import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _snack: MatSnackBar, private _login: LoginService, private _router: Router) { }

  isSubmit: any = false;
  loginForm: any = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmit = true;
    console.log(this.loginForm.email == null);
    if (this.loginForm.value.email.trim() == '' || this.loginForm.value.email == null) {
      this._snack.open("Email is required !", 'close', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this._login.generateToken(this.loginForm.value).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);
        //login..
        this._login.loginUser(data);

        this._login.getCurrentUser().subscribe(
          (user: any) => {
            this._login.setUser(user);
            console.log(user);

            //redirect ''ADMIN : Admin dashboard
            //redirect: ..NORMAL : normal dashboard
            if (this._login.getUserRole() == "ADMIN") {
              //ADMIN DASHBOARD
              //window.location.href='/admin';
              this._router.navigate(['admin'])
              this._login.loginStatusSubject.next(true);
            } else if (this._login.getUserRole() == "NORMAL") {
              //USER DASHBOARD
              //window.location.href='/user-dashboard';
              this._router.navigate(['user-dashboard/0'])
              this._login.loginStatusSubject.next(true);
            } else {
              this._login.logout();
            }

          }
        )
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this._snack.open("Invalid Details !! Try again", '', { duration: 3000 })
      });
  }



  reset() {
    this.loginForm.reset();
  }
}
