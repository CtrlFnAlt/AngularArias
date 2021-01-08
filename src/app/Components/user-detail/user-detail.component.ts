import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../Interfaces/iuser";
import {UserService} from "../../Services/user.service";
import {UserClass} from "../../Classes/user-class";

//FontAwesome
import {faSave, faUndo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  //FontAwesome
  faSave = faSave;
  faUndo = faUndo;


  private userCopy: IUser;

  constructor(private userService: UserService) {
  }

  private _user: IUser;
  reset: string = 'Resetta';
  save: string = 'Salva';

  get user() {
    return this._user;
  }

  @Input() set user(user: IUser) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }

  ngOnInit(): void {
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new UserClass();
    } else {
      this.user = this.userCopy;
    }
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }

}
