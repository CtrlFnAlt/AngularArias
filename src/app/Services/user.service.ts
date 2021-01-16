import {Injectable} from '@angular/core';
import {IUser} from "../Interfaces/iuser";
import {HttpClient} from "@angular/common/http";
import {IUsersResponse} from "../Interfaces/iusersresponse";
import {IUserResponse} from "../Interfaces/iuser-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APIURL = 'http://127.0.0.1:8000/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<IUsersResponse>(this.APIURL);
    // return this.users;
  }

  getUser(id: number) {
    return this.http.get<IUserResponse>(this.APIURL + '/' + id);
  }

  deleteUsers(user: IUser) {
    return this.http.delete<IUserResponse>(this.APIURL + '/' + user.id);
  }

  updateUser(user: IUser) {
    return this.http.patch<IUserResponse>(this.APIURL + '/' + user.id, user)
  }

  createUser(user: IUser) {
    return this.http.post<IUserResponse>(this.APIURL, user);
  }
}
