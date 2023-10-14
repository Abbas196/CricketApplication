import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSubmit:any=false;
  loginForm:any = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  get f(){
    return this.loginForm.controls;
  }

  login(){
    this.isSubmit=true;
    console.log(this.loginForm.value);
  }

  reset(){
    this.loginForm.reset();
  }
}
