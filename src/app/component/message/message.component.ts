import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public dialog: MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  OnOkClick() {
    this.dialog.close();
  }
}
