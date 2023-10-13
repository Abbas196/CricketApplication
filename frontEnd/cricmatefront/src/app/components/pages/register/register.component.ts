import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from 'src/app/services/signup.service';

interface Players {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _signup: SignupService, private _snack: MatSnackBar) { }

  isSubmit: any = false;
  // playingRoles: Players[] = [
  //   {value: 'Batter', viewValue: 'Steak'},
  //   {value: 'Bowler', viewValue: 'Pizza'},
  //   {value: 'All Rounder', viewValue: 'Tacos'},
  //   {value: 'Wicket Keeper', viewValue: 'Tacos'},
  // ];

  regForm: any = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  });

  register() {
    this.isSubmit = true;
    console.log(this.regForm.value);
    if (this.regForm.value.email == '' || this.regForm.value.email == null) {
      this._snack.open("Email is required !!", '', {
        duration: 3000
      })
      return;
    }
    this._signup.addUser(this.regForm.value).subscribe(
      (data) => {
        console.log('200');
      },
      (error) => {
        this._snack.open("Something went wrong !", '', {
          duration: 3000
        })
      }
    )
  }

  get f() {
    return this.regForm.controls;
  }

  reset() {
    this.regForm.reset();
  }

}
