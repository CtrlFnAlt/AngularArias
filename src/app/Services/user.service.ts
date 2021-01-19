import {Injectable} from '@angular/core';
import {IUser} from "../Interfaces/iuser";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IUsersResponse} from "../Interfaces/iusersresponse";
import {IUserResponse} from "../Interfaces/iuser-response";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APIURL = 'http://127.0.0.1:8000/users';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getAuthenHeaderToken(): HttpHeaders {
    let header = new HttpHeaders(
      {
        Authorization: 'Bearer' + this.auth.getToken()
      }
    );
    return header;
  }

  getUsers() {
    return this.http.get<IUsersResponse>(this.APIURL, {
      headers: this.getAuthenHeaderToken()
    });
  }

  getUser(id: number) {
    return this.http.get<IUserResponse>(this.APIURL + '/' + id,
      {
        headers: this.getAuthenHeaderToken()
      });
  }

  deleteUsers(user: IUser) {
    const data = {method: 'DELETE'};
    return this.http.delete<IUserResponse>(this.APIURL + '/' + user.id,
      {
        headers: this.getAuthenHeaderToken()
      });
  }

  updateUser(user: IUser) {
    return this.http.patch<IUserResponse>(this.APIURL + '/' + user.id, user,
      {
        headers: this.getAuthenHeaderToken()
      });
  }

  createUser(user: IUser) {
    return this.http.post<IUserResponse>(this.APIURL, user,
      {
        headers: this.getAuthenHeaderToken()
      });
  }
}
