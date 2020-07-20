import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { User } from 'src/app/core/models/user';
import {Router} from '@angular/router';
import { ConfirmationComponent } from 'src/app/component/confirmation/confirmation.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userID', 'userName', 'name', 'email', 'phone', 'edit', 'delete'];
  userSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private matDialog: MatDialog, private userService: UserService, private router: Router) { }

  ngOnInit() {
   this.fillTable();
  }

  fillTable() {
    this.userService.getUsers().subscribe(res => {
      this.userSource = new MatTableDataSource(res);
    });
  }

  CreateUser() {
    this.router.navigate(['/user', 'create']);
  }

  EditUser(userID: number) {
    this.router.navigate(['/user', 'edit', userID]);
  }

  DeleteUser(user: User) {
    const dialog = this.matDialog.open(ConfirmationComponent, {data: 'Are you sure you want to delete the user?'});
    dialog.afterClosed().subscribe(result => {
      if (result) {
        user.active = false;
        this.userService.editUser(user).subscribe(res => {
          this.fillTable();
        });
      }
    });
  }
}
