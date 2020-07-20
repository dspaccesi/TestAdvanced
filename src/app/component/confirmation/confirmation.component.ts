import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }

  OnCancelClick(): void {
    this.dialog.close();
  }

  OnConfirmationClick(): void {

  }
}
