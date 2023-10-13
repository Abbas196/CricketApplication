import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  inputData:any;
  closemessage='closed';
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopupComponent>, private builder:FormBuilder){}
  ngOnInit(): void {
    if (this.data.formType === 'scoreForm') {
      this.inputData=this.data;
    } else {
      this.inputData=this.data;
    }
    
  }

  closePopup(){
    this.ref.close('it is closed');
  }

  myform = this.builder.group({
    runsScored:this.builder.control(''),
    penaltyRuns:this.builder.control('')
  });

  createteamform= this.builder.group({
    teamName:this.builder.control('')
  })

  saveUser(){
    if (this.data.formType === 'scoreForm') {
      console.log(this.myform.value);
    } else {
      console.log(this.createteamform.value);
    }
    
    this.ref.close('details saved');
  }
}
