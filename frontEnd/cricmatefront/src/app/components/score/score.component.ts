import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  
  scores = [0,1,2,3,4,5,6,"..."];
  
  overScores:any=[];
  valuetobeAdded:string="";


  constructor(private dialog:MatDialog, private _formBuilder: FormBuilder){}
  ngOnInit(): void {
    
  }
  Score(value:any){
    this.valuetobeAdded="";
    const extrasValues:any = this.extras.value;
    for(let key in extrasValues){
      if(extrasValues[key]=== true){
        switch (key) {
          case "wide":
              this.valuetobeAdded += "WD";
              break;
          case "noball":
              this.valuetobeAdded += " NB";
              break;
          case "byes":
              this.valuetobeAdded += " B";
              break;
          case "legbyes":
              this.valuetobeAdded += " LB";
              break;
          case "wicket":
              this.valuetobeAdded += " W";
              break;
      }
      }
    }
   
    if(value!="..."){
      //runs logics
      this.overScores.push(value+" "+this.valuetobeAdded);
      console.log(this.overScores);
    }else{
      var _popup = this.dialog.open(PopupComponent,{
        width:'100%',
        enterAnimationDuration:'1000ms',
        exitAnimationDuration:'1000ms',
        data:{
          title: 'End of the first inning',
          formType: 'scoreForm' 
        }
      });
      _popup.afterClosed().subscribe(item=>{
        console.log(item);
      })
    }
  }

  extras = this._formBuilder.group({
    wide:false,
    noball:false,
    byes:false,
    legbyes:false,
    wicket:false
  })
}
