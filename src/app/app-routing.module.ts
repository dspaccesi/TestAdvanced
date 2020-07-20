import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './view/user/user-list/user-list.component';
import { UserFormComponent } from './view/user/user-form/user-form.component';

const routes: Routes = [
  { path: 'user',
children: [
  { path: '', component: UserListComponent },
  { path: ':type', component: UserFormComponent },
  { path: ':type/:id', component: UserFormComponent },
]
},

  { path: '**', component: UserListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
