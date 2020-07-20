import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user';
import { MatDialog } from '@angular/material';
import { MessageComponent } from 'src/app/component/message/message.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  operation: string;
  constructor(private matDialog: MatDialog, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router, private fb: FormBuilder) {
  }

  UserForm: FormGroup;

  ngOnInit() {
    this.UserForm = this.createFormGroupWithBuilder(this.fb, null);
    this.activatedRoute.paramMap.subscribe(params => {
    this.operation = params.get('type');
    if(this.operation === 'edit'){
      const id = Number(params.get('id'));
      this.userService.getUserByID(id).subscribe(res => {
        this.UserForm = this.createFormGroupWithBuilder(this.fb, res);
      });
    }
    });

  }

  onSubmit() {
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder, user: User) {
    const emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return formBuilder.group({
      userID: [user?user.userID:0, []],
      userName: [user?user.userName: '', [Validators.required]],
      name: [user?user.name: '', [Validators.required]],
      email: [user?user.email: '', [Validators.required, Validators.pattern(emailRegEx)]],
      phone: [user?user.phone: '', []],
      active: (user? user.active:true)
    });
  }

  SaveUser(){
    if(this.UserForm.valid){
      switch (this.operation) {
        case 'create':
          this.userService.createUser(this.UserForm.value).subscribe(res => {
            this.router.navigate(['/']);
          },
          error=>{
          if(error.status === 409){
            const dialog = this.matDialog.open(MessageComponent, {data:error.error});
          }
          });
          break;
        case 'edit':
          this.userService.editUser(this.UserForm.value).subscribe(res => {
            this.router.navigate(['/']);
          });
        default:
          break;
      }
    }
  }

  Cancel(){
    this.router.navigate(['/']);
  }
}
