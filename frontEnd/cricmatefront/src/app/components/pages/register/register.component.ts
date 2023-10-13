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
  playingRoles: Players[] = [
    {value: 'Batter', viewValue: 'Batter'},
    {value: 'Bowler', viewValue: 'Bowler'},
    {value: 'All Rounder', viewValue: 'All Rounder'},
    {value: 'Wicket Keeper', viewValue: 'Wicket Keeper'},
  ];
  battingStyles: Players[] = [
    {value: 'Right Handed Batter', viewValue: 'Right Handed Batter'},
    {value: 'Left Handed Batter', viewValue: 'Left Handed Batter'},
  ];
 bowlingStyles: Players[] = [
    {value: 'Right Arm Medium', viewValue: 'Right Arm Medium'},
    {value: 'Right Arm Fast', viewValue: 'Right Arm Fast'},
    {value: 'Right Arm Off Spin', viewValue: 'Right Arm Off Spin'},
    {value: 'Right Arm Leg Spin', viewValue: 'Right Arm Leg Spin'},
    {value: 'Left Arm Medium', viewValue: 'Left Arm Medium'},
    {value: 'Left Arm Fast', viewValue: 'Left Arm Fast'},
    {value: 'Left Arm Off Spin', viewValue: 'Left Arm Off Spin'},
    {value: 'Left Arm Leg Spin', viewValue: 'Left Arm Leg Spin'},
  ];

  regForm: any = new FormGroup({
    //username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    playingRole: new FormControl('', Validators.required),
    battingStyle: new FormControl('', Validators.required),
    bowlingStyle: new FormControl('', Validators.required)
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
