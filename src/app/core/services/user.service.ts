import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUrl = environment.ApiURL;
  constructor(protected httpClient: HttpClient) {

   }

   public getUsers(): Observable <User[]> {
     return this.httpClient.get<User[]>(`${this.APIUrl}User`);
   }

   public getUserByID(userID: number): Observable <User> {
     return this.httpClient.get<User>(`${this.APIUrl}User/${userID}`);
   }

   public createUser(user: any) {
    return this.httpClient.post(`${this.APIUrl}User`, user);
  }

  public editUser(user: any) {
   return this.httpClient.put(`${this.APIUrl}User`, user);
 }

  public deleteUser(user: any) {
    return this.httpClient.delete(`${this.APIUrl}User`, user);
  }
}
