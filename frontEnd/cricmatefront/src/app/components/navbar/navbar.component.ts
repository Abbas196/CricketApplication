import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  opened = false;  // Declare the opened property here

  constructor(private dialog:MatDialog){}
  createTeam(){
    var _popup = this.dialog.open(PopupComponent,{
      width:'100%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        title: 'Create Team',
        formType: 'teamForm'
      }
    });
    _popup.afterClosed().subscribe(item=>{
      console.log(item);
    })
  }
}
