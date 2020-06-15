import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  public addresses = [
    {value: 'Street Address'},
    {value: 'Mailing Address'}
  ]
  public emails = [
    {value: 'Work'},
    {value: 'Personal'},
    {value: 'Other'}
  ]
  public phones = [
    {value: 'Work'},
    {value: 'Home'},
    {value: 'Mobile'},
    {value: 'Other'}
  ]
  public genders = ['Female', 'Male'];
  public ssnIsVisible = "password"

  constructor(public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  changeVisible() {
    if (this.ssnIsVisible == "password") {
      this.ssnIsVisible = "text"
    } else if (this.ssnIsVisible == "text") {
      this.ssnIsVisible = "password"
    }
  }

  ngOnInit(): void {
  }

}
