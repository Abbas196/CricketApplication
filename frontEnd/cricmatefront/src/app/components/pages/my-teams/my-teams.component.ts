import { Component } from '@angular/core';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent {
  teams = ["Chennai Super Kings","Royal Challangers Banglore", "Mumbai Indians"];

  constructor(private dialog:MatDialog){}
  updateTeam(){
    var _popup = this.dialog.open(PopupComponent,{
      width:'100%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Update Team',
        formType: 'teamForm'
      }
    });
    _popup.afterClosed().subscribe(item=>{
      console.log(item);
    })
  }
}
