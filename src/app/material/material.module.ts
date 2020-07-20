import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatButtonModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatStepperModule, MatDialogModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    MatStepperModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    MatStepperModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule]
})
export class MaterialModule { }
