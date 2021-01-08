import {Component} from '@angular/core';
import {IUser} from "./Interfaces/iuser";
import {UserClass} from "./Classes/user-class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFront';

  userSelected: IUser = new UserClass();
  showForm: boolean = false;

  updateUser(user: IUser) {
    this.showForm = true;
    this.userSelected = user;
  }

  newUser(){
    this.userSelected = new UserClass();
    this.showForm = true;

  }
}
