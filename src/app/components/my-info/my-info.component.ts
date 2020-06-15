import { Component, OnInit } from '@angular/core';
import { EMPLOYEEDETAILS_MOCK } from 'src/mock';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
var moment = require('moment'); 

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  employee = EMPLOYEEDETAILS_MOCK
  hireDate = moment(EMPLOYEEDETAILS_MOCK.hireDate).format("MMM Do YYYY")
  birthday = moment(EMPLOYEEDETAILS_MOCK.dateOfBirth).format("MMM Do YYYY")

  constructor(public dialog: MatDialog ) {}

  

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";

    dialogConfig.data = {
      employee: this.employee
  };

    this.dialog.open(EditModalComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
